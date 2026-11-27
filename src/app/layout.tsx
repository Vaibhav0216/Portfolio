import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const GA_ID = "G-L4CY3V0FNC";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Vaibhav Kshirsagar | Senior Embedded Systems Engineer",
  description:
    "Vaibhav Kshirsagar — Senior Embedded Systems & Software Engineer with 2.5+ years of production experience in Linux BSP, FreeRTOS, STM32, ESP32, IoT platforms, and cloud backend development. Based in Pune, India.",
  keywords: [
    "Vaibhav Kshirsagar",
    "Embedded Systems Engineer",
    "Linux BSP Developer",
    "IoT Engineer",
    "STM32",
    "ESP32",
    "FreeRTOS",
    "Pune",
    "India",
    "Embedded Software Engineer",
    "IoT Developer",
  ],
  authors: [{ name: "Vaibhav Kshirsagar" }],
  creator: "Vaibhav Kshirsagar",
  metadataBase: new URL("https://vaibhavkshirsagar.com"),
  alternates: {
    canonical: "https://vaibhavkshirsagar.com",
  },
  openGraph: {
    title: "Vaibhav Kshirsagar | Senior Embedded Systems Engineer",
    description:
      "Senior Embedded Systems & Software Engineer specializing in Linux BSP, FreeRTOS, STM32, ESP32, industrial IoT, and cloud platforms.",
    type: "website",
    url: "https://vaibhavkshirsagar.com",
    siteName: "Vaibhav Kshirsagar Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Vaibhav Kshirsagar | Senior Embedded Systems Engineer",
    description:
      "Senior Embedded Systems & Software Engineer — Linux BSP, FreeRTOS, STM32, ESP32, IoT & Cloud.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
