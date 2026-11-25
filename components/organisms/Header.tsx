import Link from "next/link";
import { NavigationItem } from "../molecules/NavigationItem";

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo">
          Pangasinan Heritage
        </Link>

        <nav className="main-nav">
          <NavigationItem href="/" label="Home" />
          <NavigationItem href="/heritage" label="Heritage" />
          <NavigationItem href="/about" label="About" />
        </nav>
      </div>
    </header>
  );
}