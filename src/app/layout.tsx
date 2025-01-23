import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Caveat, Merriweather } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  style:"italic"
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
});

const merriweather = Merriweather({
  weight:"400",
  style:"italic",
  subsets: ['latin'],
  variable: '--font-merriweather',
})

export const metadata: Metadata = {
  title: "vishwabandhufoundation",
  description: "Creating using next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${caveat.variable} ${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
