import { NextResponse } from "next/server";
import type { MetadataRoute } from "next";

export async function GET() {
  const baseUrl = "https://viterra.com";

  const staticPages = [
    "",
    "/about",
    "/services",
    "/projects",
    "/contact",
    "/careers",
    "/places",
    "/privacy",
    "/terms",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>
  `
    )
    .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
