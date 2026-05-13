import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "Universal Institute | Advanced IT Education & Training",
  description: "Universal Institute offers world-class IT education, professional training, and industry-ready courses to advance your career in computing and technology.",
  keywords: ["IT courses", "computer education", "universal institute", "ITI global", "programming courses", "tech training", "amritsar institute"],
  openGraph: {
    title: "Universal Institute | Advanced IT Education",
    description: "Join Universal Institute for world-class IT education and professional training.",
    url: "https://www.uniinstitute.in",
    siteName: "Universal Institute",
    locale: "en_IN",
    type: "website",
  },
  verification: {
    google: "yjkYDYS58EcGNeQ8I7A8VYDBaLBKPhPmm-53lTIZUK4",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-on-surface font-body-md">
        <CustomCursor />
        <Navbar />
        <main className="flex-grow  md:pt-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
