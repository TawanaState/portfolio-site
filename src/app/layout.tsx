import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./fonts/fonts.css"; // Import custom fonts
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tawananyasha Mukoriwo - Software Engineer & Innovator",
  description: "🚀 Welcome to the digital playground of Tawananyasha Mukoriwo, a software engineer who loves to build things that live on the web. From elegant code to intuitive hardware, I'm on a mission to innovate and inspire. Let's build the future, one line of code at a time! 💻✨",
  keywords: ["Tawananyasha Mukoriwo", "Software Engineer", "Full-Stack Developer", "Next.js", "React", "Node.js", "Hardware", "Machine Learning", "Portfolio", "Zimbabwe"],
  authors: [{ name: "Tawananyasha Mukoriwo", url: "https://tawananyasha.com" }],
  creator: "Tawananyasha Mukoriwo",
  openGraph: {
    title: "Tawananyasha Mukoriwo - Software Engineer & Innovator",
    description: "🚀 Welcome to the digital playground of Tawananyasha Mukoriwo, a software engineer who loves to build things that live on the web. From elegant code to intuitive hardware, I'm on a mission to innovate and inspire. Let's build the future, one line of code at a time! 💻✨",
    url: "https://tawananyasha.com",
    siteName: "Tawananyasha Mukoriwo's Portfolio",
    images: [
      {
        url: "/portfolio-og.jpg",
        width: 1200,
        height: 630,
        alt: "Tawananyasha Mukoriwo's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tawananyasha Mukoriwo - Software Engineer & Innovator",
    description: "🚀 Welcome to the digital playground of Tawananyasha Mukoriwo, a software engineer who loves to build things that live on the web. From elegant code to intuitive hardware, I'm on a mission to innovate and inspire. Let's build the future, one line of code at a time! 💻✨",
    creator: "@TawanaMukoriwo",
    images: ["/portfolio-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
