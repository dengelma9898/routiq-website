export const dynamic = "force-static"
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = new URL("https://routiq.local")
  return ["/", "/features", "/contact", "/impressum", "/datenschutz"].map((path) => ({
    url: new URL(path, base).toString(),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.6,
  }))
}



