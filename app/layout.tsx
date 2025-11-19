import type { Metadata } from "next";
import { Outfit,Ovo,Changa_One } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

// Configure Outfit font
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-outfit',
});

// Configure Ovo font
const ovo = Ovo({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-ovo',
});

// Configure Changa One font
const changaOne = Changa_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-changa-one",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Full-stack developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${outfit.variable} ${ovo.variable} ${changaOne.variable} antialiased leading-8 overflow-x-hidden`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
