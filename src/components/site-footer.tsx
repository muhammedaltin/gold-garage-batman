import { MapPin, Phone, Clock, Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-display text-2xl font-bold tracking-wider text-gold">
              GOLD <span className="text-foreground">GARAGE</span>
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Batman'ın lider boyasız göçük düzeltme ve araç kaplama merkezi. Maslak Oto Sanayi
              tecrübesiyle kusursuz sonuçlar.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-foreground">İletişim</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=G%C3%BCltepe%20Mahallesi%2C%20Yeni%20Sanayi%20Sitesi%2015.%20Sokak%20No%3A%20J%2F18%2C%20Batman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  Gültepe Mahallesi, Yeni Sanayi Sitesi 15. Sokak No: J/18, Batman
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-gold" />
                <a href="tel:+905522990672" className="hover:text-gold">
                  +90 552 299 06 72
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="size-4 shrink-0 text-gold" />
                <span>Pzt - Cmt: 09:00 - 19:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-foreground">Sosyal Medya</h4>
            <div className="mt-4">
              <a
                href="https://www.instagram.com/goldgarageotomotiv/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                <Instagram className="size-5" />
                @goldgarageotomotiv
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Gold Garage. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
