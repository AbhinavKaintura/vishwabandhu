import type { Metadata } from "next";
import { Poppins, Caveat, Merriweather, Montserrat, Roboto, Comic_Neue } from "next/font/google";
import "./globals.css";


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

const montserrat = Montserrat({ variable: "--font-montserrat" });

const roboto = Roboto({ variable: "--font-roboto", weight: "900" });

const comic_neue = Comic_Neue({ variable: "--font-comic-neue", weight: "400", style: "italic" });

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
        className={`${roboto.variable} ${poppins.variable} ${caveat.variable} ${merriweather.variable} ${montserrat.variable} ${comic_neue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
