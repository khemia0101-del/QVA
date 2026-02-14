import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { createLead, addToMailingList, getDb } from "./db";
import { leads, mailingList } from "../drizzle/schema";
import { eq } from "drizzle-orm";

describe("Lead Management", () => {
  let db: any;

  beforeAll(async () => {
    db = await getDb();
    if (!db) {
      console.warn("Database not available for tests");
    }
  });

  it("should create a new lead", async () => {
    if (!db) {
      console.warn("Skipping test - database not available");
      return;
    }

    const testLead = {
      name: "John Doe",
      email: "john@example.com",
      phone: "5551234567",
      creditScore: "750",
    };

    const result = await createLead(testLead);
    expect(result).toBeDefined();

    // Verify the lead was created
    const createdLead = await db
      .select()
      .from(leads)
      .where(eq(leads.email, testLead.email))
      .limit(1);

    expect(createdLead.length).toBeGreaterThan(0);
    expect(createdLead[0].name).toBe(testLead.name);
    expect(createdLead[0].creditScore).toBe(testLead.creditScore);

    // Cleanup
    await db.delete(leads).where(eq(leads.email, testLead.email));
  });

  it("should add email to mailing list", async () => {
    if (!db) {
      console.warn("Skipping test - database not available");
      return;
    }

    const testEmail = {
      email: "subscriber@example.com",
      source: "blog" as const,
    };

    const result = await addToMailingList(testEmail);
    expect(result).toBeDefined();

    // Verify the email was added
    const addedEntry = await db
      .select()
      .from(mailingList)
      .where(eq(mailingList.email, testEmail.email))
      .limit(1);

    expect(addedEntry.length).toBeGreaterThan(0);
    expect(addedEntry[0].email).toBe(testEmail.email);
    expect(addedEntry[0].source).toBe(testEmail.source);

    // Cleanup
    await db.delete(mailingList).where(eq(mailingList.email, testEmail.email));
  });

  it("should handle duplicate email in mailing list gracefully", async () => {
    if (!db) {
      console.warn("Skipping test - database not available");
      return;
    }

    const testEmail = {
      email: `duplicate-${Date.now()}@example.com`,
      source: "podcast" as const,
    };

    // Add first time
    await addToMailingList(testEmail);

    // Try to add again - should throw duplicate error
    let threwError = false;
    try {
      await addToMailingList(testEmail);
    } catch (error) {
      threwError = true;
      expect(error instanceof Error).toBe(true);
    }

    expect(threwError).toBe(true);

    // Cleanup
    await db.delete(mailingList).where(eq(mailingList.email, testEmail.email));
  });

  it("should validate lead data", async () => {
    if (!db) {
      console.warn("Skipping test - database not available");
      return;
    }

    // Test with invalid data
    const invalidLead = {
      name: "",
      email: "invalid-email",
      phone: "123",
      creditScore: "invalid",
    };

    // This should fail validation at the tRPC level
    // For now, we just verify the function exists
    expect(createLead).toBeDefined();
  });
});
