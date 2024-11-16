import "../styles/global.css";
import Header from "../components/header/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Best Seller",
    default: "The New York Times Best Seller",
  },
  description: "Best Seller Site by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
