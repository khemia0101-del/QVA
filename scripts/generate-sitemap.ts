/**
 * QVA Holdings — Sitemap Generator
 * Generates sitemap.xml for SEO optimization
 */

import { writeFileSync } from 'fs';
import { blogPosts } from '../client/src/lib/blogData';
import { podcastEpisodes } from '../client/src/lib/podcastData';

const BASE_URL = 'https://qvaholdings.com';

interface SitemapURL {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

function formatDate(dateString: string): string {
  // Convert "February 12, 2026" to "2026-02-12"
  const date = new Date(dateString);
  return date.toISOString().split('T')[0];
}

function generateSitemap(): string {
  const urls: SitemapURL[] = [];

  // Homepage
  urls.push({
    loc: BASE_URL,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 1.0,
  });

  // Blog listing page
  urls.push({
    loc: `${BASE_URL}/blog`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily',
    priority: 0.9,
  });

  // Blog posts
  blogPosts.forEach((post) => {
    urls.push({
      loc: `${BASE_URL}/blog/${post.slug}`,
      lastmod: formatDate(post.date),
      changefreq: 'monthly',
      priority: 0.8,
    });
  });

  // Podcast listing page
  urls.push({
    loc: `${BASE_URL}/podcast`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.9,
  });

  // Podcast episodes
  podcastEpisodes.forEach((episode) => {
    urls.push({
      loc: `${BASE_URL}/podcast/${episode.slug}`,
      lastmod: formatDate(episode.date),
      changefreq: 'monthly',
      priority: 0.8,
    });
  });

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return xml;
}

// Generate and save sitemap
const sitemap = generateSitemap();
writeFileSync('./client/public/sitemap.xml', sitemap);
console.log('✅ Sitemap generated successfully at client/public/sitemap.xml');
console.log(`📊 Total URLs: ${sitemap.split('<url>').length - 1}`);
