import "./globals.css";
import { Inter, Anton } from "next/font/google";

export const metadata = {
  title: "IronForge Gym | Forge Your Limits",
  description:
    "IronForge Gym is a high-performance training facility offering strength, conditioning, and coaching for every level.",
  metadataBase: new URL("https://ironforge-gym.example.com")
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
  display: "swap"
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${anton.variable}`}>
      <body className="bg-iron-900 text-white antialiased">
        {children}
      </body>
    </html>
  );
}


