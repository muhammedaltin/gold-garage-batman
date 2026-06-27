import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/#hizmetler", label: "Hizmetlerimiz" },
  { to: "/#hakkimizda", label: "Hakkımızda" },
  { to: "/#iletisim", label: "İletişim" },
];

const phoneHref = "tel:+905522990672";

const phoneButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

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
          <a href={phoneHref} className={phoneButtonClass}>
            <Phone className="size-4" />
            Bize Ulaşın
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={phoneHref}
            aria-label="Telefonla ara"
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:text-gold"
          >
            <Phone className="size-6" />
          </a>
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-gold"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
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
            <a
              href={phoneHref}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              onClick={() => setMobileOpen(false)}
            >
              <Phone className="size-4" />
              +90 552 299 06 72
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
