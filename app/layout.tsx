import { Figtree } from "next/font/google";
import "./globals.css";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "ASMR Sounds",
  description: "White Noise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
