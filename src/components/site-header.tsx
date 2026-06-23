import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/#hizmetler", label: "Hizmetlerimiz" },
  { to: "/#hakkimizda", label: "Hakkımızda" },
  { to: "/#iletisim", label: "İletişim" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold tracking-wider text-gold">
            GOLD <span className="text-foreground">GARAGE</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="default" size="sm">
            <a href="tel:+905522990672" className="inline-flex items-center gap-2">
              <Phone className="size-4" />
              Bize Ulaşın
            </a>
          </Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-gold md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-gold"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="default" size="default" className="w-full">
              <a
                href="tel:+905522990672"
                className="inline-flex items-center justify-center gap-2"
              >
                <Phone className="size-4" />
                +90 552 299 06 72
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
