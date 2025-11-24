import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "ProMISe",
  description: "Procurement Management Information System",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
