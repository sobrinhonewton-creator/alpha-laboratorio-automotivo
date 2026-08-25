import { describe, expect, it } from "vitest";
import { categories } from "@/data/products";
import { services, siteConfig, whatsappUrl } from "@/config/site";

describe("Alpha site content", () => {
  it("keeps service and category identifiers unique", () => {
    expect(new Set(services.map((service) => service.id)).size).toBe(services.length);
    expect(new Set(categories.map((category) => category.slug)).size).toBe(categories.length);
  });

  it("builds a WhatsApp URL from the centralized contact", () => {
    const url = whatsappUrl("Teste de triagem");

    expect(url).toContain(siteConfig.phone.whatsapp);
    expect(url).toContain("Teste%20de%20triagem");
  });

  it("uses local, optimized service artwork", () => {
    for (const service of services) {
      expect(service.image).toMatch(/^\/assets\/.+\.webp$/);
    }
  });
});
