import { useEffect } from "react";
import { useLocation } from "react-router";
import { useLang } from "../context/LangContext";
import {
  buildStructuredData,
  getSeoState,
  type SupportedLang,
} from "../utils/seo";

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
}

function setLink(selector: string, attrs: Record<string, string>) {
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attrs).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function setStructuredData(data: unknown) {
  let script = document.getElementById(
    "structured-data",
  ) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement("script");
    script.id = "structured-data";
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}

export function Seo() {
  const location = useLocation();
  const { lang } = useLang();

  useEffect(() => {
    const seo = getSeoState(location.pathname, lang as SupportedLang);
    const locale = seo.lang === "id" ? "id_ID" : "en_US";
    const alternateLocale = seo.lang === "id" ? "en_US" : "id_ID";

    document.documentElement.lang = seo.lang;
    document.title = seo.title;

    setMeta("name", "description", seo.description);
    setMeta("name", "robots", "index, follow, max-image-preview:large");
    setMeta("name", "author", "Imam Bahri Alwi");
    setMeta("name", "theme-color", "#18181b");

    setMeta("property", "og:site_name", "Imam Bahri Alwi Portfolio");
    setMeta("property", "og:title", seo.title);
    setMeta("property", "og:description", seo.description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", seo.canonicalUrl);
    setMeta("property", "og:image", seo.imageUrl);
    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");
    setMeta("property", "og:image:alt", "Imam Bahri Alwi portfolio preview");
    setMeta("property", "og:locale", locale);
    setMeta("property", "og:locale:alternate", alternateLocale);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", seo.title);
    setMeta("name", "twitter:description", seo.description);
    setMeta("name", "twitter:image", seo.imageUrl);
    setMeta("name", "twitter:image:alt", "Imam Bahri Alwi portfolio preview");

    setLink('link[rel="canonical"]', {
      rel: "canonical",
      href: seo.canonicalUrl,
    });

    Object.entries(seo.alternates).forEach(([hreflang, href]) => {
      setLink(`link[rel="alternate"][hreflang="${hreflang}"]`, {
        rel: "alternate",
        hreflang,
        href,
      });
    });

    setStructuredData(buildStructuredData(seo));
  }, [lang, location.pathname]);

  return null;
}
