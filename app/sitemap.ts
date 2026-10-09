import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { articles } from "@/data/writing";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://omdubey.dev";

  const staticRoutes = [
    "",
    "/about",
    "/skills",
    "/projects",
    "/writing",
    "/resume",
    "/uses",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const writingRoutes = articles.map((a) => ({
    url: `${baseUrl}/writing/${a.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...writingRoutes];
}
