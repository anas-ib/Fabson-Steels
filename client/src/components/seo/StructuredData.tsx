import { useEffect } from "react";

interface LocalBusinessSchema {
  "@context": string;
  "@type": string;
  name: string;
  image?: string;
  "@id"?: string;
  url?: string;
  telephone: string;
  priceRange?: string;
  address: {
    "@type": string;
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    "@type": string;
    latitude: number;
    longitude: number;
  };
  openingHoursSpecification?: Array<{
    "@type": string;
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
  areaServed?: {
    "@type": string;
    name: string;
  }[];
  sameAs?: string[];
}

interface ServiceSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  provider: {
    "@type": string;
    name: string;
  };
  areaServed: {
    "@type": string;
    name: string;
  };
}

interface FAQSchema {
  "@context": string;
  "@type": string;
  mainEntity: Array<{
    "@type": string;
    name: string;
    acceptedAnswer: {
      "@type": string;
      text: string;
    };
  }>;
}

interface StructuredDataProps {
  type: "localBusiness" | "service" | "faq";
  data: LocalBusinessSchema | ServiceSchema | FAQSchema;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    script.id = `structured-data-${type}`;
    
    // Remove existing script if present
    const existing = document.getElementById(script.id);
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const scriptToRemove = document.getElementById(script.id);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data]);

  return null;
}

// Predefined schemas for common use cases
export const localBusinessSchema: LocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Fabson Industries",
  image: "/opengraph.jpg",
  "@id": "https://fabsonindustries.com",
  url: "https://fabsonindustries.com",
  telephone: "+919148345113",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mangalore",
    addressRegion: "Karnataka",
    postalCode: "575011",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.9141,
    longitude: 74.8560,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Mangalore" },
    { "@type": "City", name: "Udupi" },
    { "@type": "City", name: "Kasaragod" },
    { "@type": "State", name: "Karnataka" },
  ],
  sameAs: [],
};

