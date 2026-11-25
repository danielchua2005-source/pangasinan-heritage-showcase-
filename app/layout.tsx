import "./globals.css";
import { Header } from "../components/organisms/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>

        <footer className="site-footer">
          <p>Pangasinan Heritage Digital Showcase</p>
          <p>© 2026 Pangasinan Heritage</p>
        </footer>
      </body>
    </html>
  );
}