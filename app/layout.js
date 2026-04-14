import "./globals.css";
import SiteChrome from "@/components/SiteChrome";

export const metadata = {
  title: "Lohith Portfolio",
  description: "Multi-page editorial portfolio with an integrated chatbot assistant.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
