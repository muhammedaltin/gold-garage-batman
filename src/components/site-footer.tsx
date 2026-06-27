import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { MessageSquare } from "lucide-react";

const googleMapsUrl = "https://maps.app.goo.gl/ivWAJAPDKmbppx1o6";
const googleReviewsUrl =
  "https://www.google.com/search?sca_esv=4995decb4bdc4888&cs=1&uds=AJ5uw1_a2D0D09lxm8gpKKOTUn4r_ma7KZ9Utblj5_vcj4acKBZsAwmh6EGQxLDxpzE8aM6BPyS08JSQKfgLLjAIJPeh7-0iiKfno3uL0brydZFhavBrKbDLOJpZY2GraPSAttfQkVxnZP29rFMNEKg3WUaSeyCVJ8K1JTaauYnDJPFE61l5v8XGacL6ERx4XIc45e-umgUvLFeXxMlGPa3_9N_1LfG7GqKsz3u82hlSUp8wqFDoUpY&q=gold+garage+boyasiz+göçük+onarim+araç+kaplama+ve+araç+dönüşüm+merkezi̇+reviews&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-__B60YPb779Iwx73c_eI9kXXj5NQ5JX4Nj4eba4XayiqIlDlrR_FHcGsTt34ORxg8IaRpffE8GDVtoYZaVDUGPuOZ-xaOg1uXyRpV4A_oXadAvF-sb239iastPCvoEO5zGIjUbeOapzJtLGtk4qpuMZPM2191OZGX8xhV70JybhMdPAKHMnJqNvkF9KlEXd9PtkgI58%3D&hl=en-TR&sa=X&ved=2ahUKEwiNuKisoqiVAxXkVvEDHbybCKoQ_4MLegQIERAO&biw=375&bih=725&dpr=3.25&zx=1782592464633";

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
                  href={googleMapsUrl}
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
            <h4 className="font-display text-lg font-semibold text-foreground">
              Yol Tarifi & Yorumlar
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <Navigation className="size-4 text-gold" />
                  Google Maps'te Yol Tarifi Al
                </a>
              </li>
              <li>
                <a
                  href={googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <MessageSquare className="size-4 text-gold" />
                  Google Yorumlarını Gör
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Gold Garage. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
