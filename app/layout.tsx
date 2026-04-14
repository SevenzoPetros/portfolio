import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Sevenzo Petros Kudakwashe - Data Scientist | Software Developer | Web Developer | Graphic Designer",
  description: "Passionate Data Scientist & Software Developer building innovative digital solutions. Specializing in AI, machine learning, full-stack development, and graphic design.",
  keywords: ["Data Scientist", "Software Developer", "Web Developer", "Graphic Designer", "AI", "Machine Learning", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Sevenzo Petros Kudakwashe" }],
  openGraph: {
    title: "Sevenzo Petros Kudakwashe - Portfolio",
    description: "Data Scientist & Software Developer specializing in AI, web development, and graphic design.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sevenzo Petros Kudakwashe - Portfolio",
    description: "Data Scientist & Software Developer specializing in AI, web development, and graphic design.",
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
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
