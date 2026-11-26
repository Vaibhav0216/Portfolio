import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Vaibhav Kshirsagar | Senior Embedded Systems Engineer",
  description:
    "Portfolio of Vaibhav Kshirsagar — Embedded Systems Engineer with 2.5+ years of production experience in Linux BSP, FreeRTOS, IoT gateway platforms, and cloud backend systems.",
  openGraph: {
    title: "Vaibhav Kshirsagar | Senior Embedded Systems Engineer",
    description:
      "Embedded Systems Engineer specializing in Linux BSP, FreeRTOS, STM32, ESP32, and industrial IoT platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
