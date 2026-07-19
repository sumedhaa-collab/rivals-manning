import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="site-nav">
      <Link href="/">Counter Picker</Link>
      <Link href="/guides">Hero Guides</Link>
    </nav>
  );
}
