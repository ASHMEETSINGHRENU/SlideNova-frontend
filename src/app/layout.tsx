import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOVA — Build Your Digital Future",
  description:
    "At Nova, we help businesses transform their ideas into modern, high-performing websites and digital experiences that strengthen your brand and drive business growth.",
  keywords: [
    "Nova",
    "Web Development",
    "UI/UX Design",
    "Digital Agency",
    "Next.js",
    "E-commerce Development",
    "Custom Web Solutions",
  ],
  authors: [{ name: "Nova Digital" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lexend:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#09090D] text-[#E8E8F0] font-sans antialiased selection:bg-[#7655F6] selection:text-white">
        {children}
      </body>
    </html>
  );
}
