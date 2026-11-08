import type { Metadata } from "next";
import { Cormorant_Garamond, EB_Garamond } from "next/font/google";
import { THEME_PREPAINT_SCRIPT } from "@/lib/theme";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Le journal de Valmont — Calligraphie anglaise & poésie",
    template: "%s · Le journal de Valmont",
  },
  description:
    "Le journal de Valmont est le carnet d’apprentissage de Damien : ses vers, mis au propre à la plume en calligraphie anglaise, partagés planche après planche, avec leurs imperfections.",
  applicationName: "Le journal de Valmont",
  openGraph: {
    title: "Le journal de Valmont",
    description:
      "Un carnet d’apprentissage : des vers calligraphiés à la plume en anglaise, planche après planche.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${cormorant.variable} ${ebGaramond.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_PREPAINT_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
