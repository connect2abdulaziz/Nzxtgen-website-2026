import React from 'react';
import { Helmet } from 'react-helmet-async';

const LocalBusinessSchema = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://nzxtgen.com.au';
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}#organization`,
    "name": "NZXTGEN",
    "alternateName": "NZXTGEN Electrical & Smart Home Services",
    "description": "Licensed electrical, smart home, security and data services for homes and small businesses across Sydney's south-west.",
    "url": baseUrl,
    "logo": `${baseUrl}/static/media/site-logo.png`,
    "image": `${baseUrl}/static/media/site-logo.png`,
    "telephone": "+61437885910",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Condell Park",
      "addressLocality": "Condell Park",
      "addressRegion": "NSW",
      "postalCode": "2200",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-33.9244",
      "longitude": "151.0125"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Condell Park"
      },
      {
        "@type": "City",
        "name": "Bankstown"
      },
      {
        "@type": "City",
        "name": "Bass Hill"
      },
      {
        "@type": "City",
        "name": "Yagoona"
      },
      {
        "@type": "City",
        "name": "Chester Hill"
      },
      {
        "@type": "City",
        "name": "Sefton"
      },
      {
        "@type": "City",
        "name": "Birrong"
      },
      {
        "@type": "City",
        "name": "Regents Park"
      },
      {
        "@type": "City",
        "name": "Chullora"
      },
      {
        "@type": "City",
        "name": "Greenacre"
      },
      {
        "@type": "State",
        "name": "New South Wales"
      },
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "-33.9244",
          "longitude": "151.0125"
        },
        "geoRadius": {
          "@type": "Distance",
          "name": "Sydney's South-West"
        }
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "14:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Electrical & Smart Home Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Electrical Services",
            "description": "Professional electrical installations, upgrades, and maintenance for homes and businesses."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Smart Home Automation",
            "description": "Integrated smart home systems for lighting, climate, security, and entertainment control."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Security Systems",
            "description": "CCTV, alarms, intercoms, and smart locks for comprehensive property protection."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Entertainment Technology",
            "description": "TV mounting, home theatre installations, and speaker systems."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Switchboard Upgrades",
            "description": "Modern switchboard upgrades for safety, compliance, and increased capacity."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data & Networking",
            "description": "Structured cabling, data points, patch panels, and network infrastructure."
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com",
      "https://www.instagram.com",
      "https://www.twitter.com",
      "https://www.youtube.com"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "1"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </Helmet>
  );
};

export default LocalBusinessSchema;
