import type { Metadata, Viewport } from "next";
import { Cairo, Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-cairo",
});

const siteUrl = "https://mohamed-ayman.dev";
const profileImage = `${siteUrl}/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "مهندس محمد أيمن | Mohamed Ayman - Software Engineer Portfolio",
    template: "%s | Mohamed Ayman - Software Engineer Portfolio",
  },
  description:
    "الموقع الرسمي للمهندس محمد أيمن، طالب هندسة الحواسيب والنظم ومطور ويب فلستاك متخصص في Python, Django, و Next.js.",
  keywords: [
    "محمد أيمن",
    "محمد ايمن",
    "مهندس محمد أيمن",
    "مهندس محمد ايمن",
    "Mohamed Ayman",
    "Mohamed Ayman Abdelfatah",
    "Software Engineer",
    "Backend Developer",
    "Full-Stack Developer",
    "Django Egypt",
    "Python Django Developer",
    "ITI Developer",
    "Al-Azhar University",
    "الأزهر",
    "Next.js Portfolio",
  ],
  authors: [
    {
      name: "Mohamed Ayman Abdelfatah",
      url: siteUrl,
    },
  ],
  creator: "Mohamed Ayman Abdelfatah",
  publisher: "Mohamed Ayman Abdelfatah",
  applicationName: "Mohamed Ayman Portfolio",
  category: "portfolio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    alternateLocale: ["ar_EG"],
    url: siteUrl,
    siteName: "Mohamed Ayman - Software Engineer Portfolio",
    title: "مهندس محمد أيمن | Mohamed Ayman - Software Engineer Portfolio",
    description:
      "الموقع الرسمي للمهندس محمد أيمن، طالب هندسة الحواسيب والنظم ومطور ويب فلستاك متخصص في Python, Django, و Next.js.",
    firstName: "Mohamed",
    lastName: "Ayman Abdelfatah",
    username: "MohamedAymn220",
    images: [
      {
        url: profileImage,
        width: 1200,
        height: 630,
        alt: "Mohamed Ayman Software Engineer portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مهندس محمد أيمن | Mohamed Ayman - Software Engineer Portfolio",
    description:
      "الموقع الرسمي للمهندس محمد أيمن، طالب هندسة الحواسيب والنظم ومطور ويب فلستاك متخصص في Python, Django, و Next.js.",
    images: [profileImage],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  verification: {
    google: "eouuHyM1TkBeTvNAqR9wujpsLSQmPOP8qPKvbu5ao8I",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#020617",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Mohamed Ayman - Software Engineer Portfolio",
      alternateName: [
        "مهندس محمد أيمن",
        "مهندس محمد ايمن",
        "محمد أيمن",
        "محمد ايمن",
        "Mohamed Ayman Portfolio",
      ],
      inLanguage: ["en", "ar"],
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile-page`,
      url: siteUrl,
      name: "مهندس محمد أيمن | Mohamed Ayman - Software Engineer Portfolio",
      description:
        "الموقع الرسمي للمهندس محمد أيمن، طالب هندسة الحواسيب والنظم ومطور ويب فلستاك متخصص في Python, Django, و Next.js.",
      inLanguage: ["en", "ar"],
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: profileImage,
        width: 1200,
        height: 630,
        caption: "Mohamed Ayman Software Engineer portfolio preview",
      },
      about: {
        "@id": `${siteUrl}/#person`,
      },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Mohamed Ayman Abdelfatah",
      alternateName: [
        "Mohamed Ayman",
        "MOHAMED AYMAN ABDELFATAH",
        "محمد أيمن",
        "محمد ايمن",
        "مهندس محمد أيمن",
        "مهندس محمد ايمن",
      ],
      url: siteUrl,
      image: profileImage,
      jobTitle: "Software Engineer",
      description:
        "Computer and Systems Engineering student at Al-Azhar University and Backend / Full-Stack Developer focused on Python, Django, Django REST Framework, REST API design, normalized databases, and modern frontend stacks including Next.js.",
      gender: "Male",
      nationality: {
        "@type": "Country",
        name: "Egypt",
      },
      homeLocation: {
        "@type": "Place",
        name: "Cairo, Egypt",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cairo",
          addressCountry: "EG",
        },
      },
      email: "mailto:mohamedayman21172@gmail.com",
      telephone: "+201149636796",
      sameAs: [
        "https://github.com/MohamedAymn220",
        "https://www.linkedin.com/in/mohamedaymanabdelfatah",
      ],
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Al-Azhar University",
          sameAs: "https://www.azhar.edu.eg/",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Cairo",
            addressCountry: "EG",
          },
        },
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "B.Sc. in Computer and Systems Engineering",
          educationalLevel: "Bachelor",
          recognizedBy: {
            "@type": "CollegeOrUniversity",
            name: "Al-Azhar University",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Full-Stack Web Development Training - 120 Hours",
          credentialCategory: "Professional Training",
          recognizedBy: {
            "@type": "Organization",
            name: "Information Technology Institute (ITI)",
          },
        },
      ],
      knowsAbout: [
        "Python",
        "Django",
        "Django REST Framework",
        "Flask",
        "REST API Design",
        "MVC/MVT Architecture",
        "Authentication and RBAC",
        "PostgreSQL",
        "SQLite",
        "Schema Design and Normalization",
        "Query Optimization",
        "JavaScript ES6+",
        "HTML5",
        "CSS3",
        "Bootstrap 5",
        "Tailwind CSS",
        "AJAX",
        "Git",
        "GitHub",
        "Docker",
        "Postman",
        "PythonAnywhere",
        "Next.js",
        "TypeScript",
      ],
      knowsLanguage: [
        {
          "@type": "Language",
          name: "Arabic",
          alternateName: "ar",
        },
        {
          "@type": "Language",
          name: "English",
          alternateName: "en",
        },
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Software Engineer",
        occupationLocation: {
          "@type": "Country",
          name: "Egypt",
        },
        skills: [
          "Backend Development",
          "Full-Stack Development",
          "Python",
          "Django",
          "Django REST Framework",
          "REST APIs",
          "Database Design",
          "Role-Based Access Control",
          "Next.js",
          "TypeScript",
        ],
      },
      memberOf: [
        {
          "@type": "Organization",
          name: "Al-Azhar University",
        },
        {
          "@type": "Organization",
          name: "Information Technology Institute (ITI)",
        },
      ],
      subjectOf: [
        {
          "@type": "CreativeWork",
          name: "Teryaq - Pharmacy Management System",
          url: "https://teryaq.pythonanywhere.com",
          description:
            "Django 5.2 pharmacy management system with 25+ RESTful routes, normalized order tracking schema, role-based admin dashboard, live income analytics, AJAX search, Docker deployment, and AZEX Engineering Exhibition 2026 showcase.",
          keywords: [
            "Django 5.2",
            "Python 3.13",
            "SQLite",
            "Tailwind CSS",
            "Chart.js",
            "AJAX",
            "Git",
            "Docker",
            "PythonAnywhere",
            "AZEX Engineering Exhibition 2026",
          ],
        },
        {
          "@type": "CreativeWork",
          name: "LearnUp Educational Platform",
          description:
            "ITI Capstone Project and multi-role EdTech platform built with Python, Django, SQLite, Bootstrap 5, authentication flows, responsive UI, and Git-based team collaboration.",
          keywords: [
            "Python",
            "Django",
            "SQLite",
            "Bootstrap 5",
            "Git",
            "ITI Capstone Project",
            "EdTech",
          ],
        },
      ],
    },
  ],
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" dir="ltr" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${plusJakarta.variable} ${cairo.variable} min-h-screen bg-background font-sans text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
