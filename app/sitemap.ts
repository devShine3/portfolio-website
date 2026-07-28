import type { MetadataRoute } from "next";
import { site } from "@/content/education";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/work",
    "/work/petty-cash",
    "/work/payroll",
    "/architecture",
    "/experience",
    "/about",
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" || path === "/work" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/work" ? 0.9 : 0.7,
  }));
}
