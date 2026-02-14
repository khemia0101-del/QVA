import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Mail, CheckCircle2 } from "lucide-react";

interface EmailSignupProps {
  source?: "blog" | "podcast";
  title?: string;
  description?: string;
}

export default function EmailSignup({
  source = "blog",
  title = "Stay Updated",
  description = "Get insights on credit partnerships and real estate financing delivered to your inbox.",
}: EmailSignupProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subscribeMutation = trpc.mailing.subscribe.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      await subscribeMutation.mutateAsync({
        email,
        source,
      });
      setIsSubmitted(true);
      setEmail("");
      toast.success("Subscribed! Check your email for confirmation.");
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      toast.error("Failed to subscribe. Please try again.");
      console.error("Subscription error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-3" />
        <h3 className="text-green-900 font-semibold mb-1">Subscribed!</h3>
        <p className="text-green-700 text-sm">Check your email for updates.</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-border rounded-lg p-6 shadow-sm">
      <div className="flex items-start gap-3 mb-4">
        <Mail className="w-5 h-5 text-gold shrink-0 mt-1" />
        <div>
          <h3 className="text-navy font-semibold text-lg">{title}</h3>
          <p className="text-muted-foreground text-sm mt-1">{description}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-10 border-border focus:border-gold focus:ring-gold/20"
        />
        <Button
          type="submit"
          disabled={isSubmitting || !email}
          className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold h-10"
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>

      <p className="text-xs text-muted-foreground text-center mt-3">
        We respect your privacy. Unsubscribe anytime.
      </p>
    </div>
  );
}
