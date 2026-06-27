import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Shield,
  Wrench,
  Sun,
  Car,
  MapPin,
  Phone,
  Clock,
  Award,
  CheckCircle2,
  Navigation,
  MessageSquare,
} from "lucide-react";
import { WhatsAppIcon, WHATSAPP_URL } from "@/components/whatsapp-button";
import { TestimonialsMarquee } from "@/components/testimonials-marquee";
import heroGarage from "@/assets/hero-garage.jpg";
import servicePpf from "@/assets/service-ppf.jpg";

const googleMapsUrl = "https://maps.app.goo.gl/ivWAJAPDKmbppx1o6";
const googleReviewsUrl =
  "https://www.google.com/search?sca_esv=4995decb4bdc4888&cs=1&uds=AJ5uw1_a2D0D09lxm8gpKKOTUn4r_ma7KZ9Utblj5_vcj4acKBZsAwmh6EGQxLDxpzE8aM6BPyS08JSQKfgLLjAIJPeh7-0iiKfno3uL0brydZFhavBrKbDLOJpZY2GraPSAttfQkVxnZP29rFMNEKg3WUaSeyCVJ8K1JTaauYnDJPFE61l5v8XGacL6ERx4XIc45e-umgUvLFeXxMlGPa3_9N_1LfG7GqKsz3u82hlSUp8wqFDoUpY&q=gold+garage+boyasiz+göçük+onarim+araç+kaplama+ve+araç+dönüşüm+merkezi̇+reviews&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-__B60YPb779Iwx73c_eI9kXXj5NQ5JX4Nj4eba4XayiqIlDlrR_FHcGsTt34ORxg8IaRpffE8GDVtoYZaVDUGPuOZ-xaOg1uXyRpV4A_oXadAvF-sb239iastPCvoEO5zGIjUbeOapzJtLGtk4qpuMZPM2191OZGX8xhV70JybhMdPAKHMnJqNvkF9KlEXd9PtkgI58%3D&hl=en-TR&sa=X&ved=2ahUKEwiNuKisoqiVAxXkVvEDHbybCKoQ_4MLegQIERAO&biw=375&bih=725&dpr=3.25&zx=1782592464633";

const phoneHref = "tel:+905522990672";

const primaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

const outlineGoldButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-md border border-gold bg-transparent px-6 py-3 text-base font-medium text-gold shadow-sm transition-colors hover:bg-gold/10 hover:text-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

const whatsappButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-6 py-3 text-base font-medium text-whatsapp-foreground shadow transition-colors hover:bg-whatsapp/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gold Garage | Boyasız Oto Göçük Düzeltme ve PPF Kaplama" },
      {
        name: "description",
        content:
          "Gold Garage Batman'de boyasız oto göçük düzeltme, PPF kaplama, cam film kaplama ve araç modifikasyon hizmetleri sunar.",
      },
      {
        property: "og:title",
        content: "Gold Garage | Boyasız Oto Göçük Düzeltme ve PPF Kaplama",
      },
      {
        property: "og:description",
        content:
          "Gold Garage Batman'de boyasız oto göçük düzeltme, PPF kaplama, cam film kaplama ve araç modifikasyon hizmetleri sunar.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Shield,
    title: "PPF Kaplama",
    description:
      "Şeffaf boya koruma filmi ile aracınızın boyasını çizikler, taş izleri ve dış etkenlere karşı koruyoruz.",
    href: "/Batman-ppf-kaplama.html",
  },
  {
    icon: Wrench,
    title: "Boyasız Göçük Düzeltme",
    description:
      "Boya işlemi yapmadan, orijinal görünümü bozmadan göçük ve eziklerinizi özel araçlarla düzeltiyoruz.",
    href: "/Batman-boyasiz-gocuk-duzeltme.html",
  },
  {
    icon: Sun,
    title: "Cam Film Kaplama",
    description:
      "UV ışınlarına karşı koruma, iç mekan sıcaklığı kontrolü ve gizlilik için kaliteli cam filmi uygulamaları.",
  },
  {
    icon: Car,
    title: "Modifikasyon",
    description:
      "Araç dönüşüm ve kişiselleştirme işlemleriyle aracınızı hayalinizdeki görünüme kavuşturuyoruz.",
  },
];

const features = [
  "Maslak Oto Sanayi eğitimli ustalar",
  "Orijinal boyaya dokunmadan onarım",
  "Premium kalite malzemeler",
  "Hızlı ve güvenilir hizmet",
  "Batman ve çevre illere hizmet",
];

function Index() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center">
        <div className="absolute inset-0">
          <img
            src={heroGarage}
            alt="Gold Garage premium araç kaplama ve detaylandırma atölyesi"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">
              <Award className="size-4" />
              Maslak Oto Sanayi Tecrübesi
            </div>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.1] text-foreground sm:text-6xl lg:text-7xl">
              BOYASIZ GÖÇÜK <span className="text-gold text-glow">DÜZELTME</span>
              <br />
              VE PPF KAPLAMA
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Batman'da lüks ve ticari araçlara özel boyasız göçük düzeltme, PPF kaplama, cam filmi
              ve modifikasyon hizmetleri.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={phoneHref} className={primaryButtonClass}>
                <Phone className="size-5" />
                Hemen Ara
              </a>
              <a href="#hizmetler" className={outlineGoldButtonClass}>
                Hizmetlerimizi Keşfet
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="hizmetler" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              HİZMETLERİMİZ
            </h2>
            <p className="mt-4 text-muted-foreground">
              Aracınızı koruyan ve yenileyen profesyonel çözümler.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-gold/50 hover:bg-accent"
              >
                <div className="inline-flex rounded-lg bg-gold/10 p-3 text-gold">
                  <service.icon className="size-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                {service.href && (
                  <Link
                    to={service.href}
                    className="mt-auto pt-5 text-sm font-medium text-gold transition-colors hover:text-gold/80"
                  >
                    Detaylı bilgi →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="hakkimizda" className="border-y border-border/50 bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <img
                src={servicePpf}
                alt="PPF kaplama uygulaması"
                className="rounded-2xl object-cover shadow-2xl"
                width={1024}
                height={768}
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                NEDEN <span className="text-gold">GOLD GARAGE?</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Ustalarımız, Türkiye'nin en prestijli sanayi sitesi olan Maslak Oto Sanayi'de
                yetişmiş olup hem PPF kaplama hem de boyasız göçük düzeltme ustalıklarını lüks
                araçlar üzerinde kazanmıştır.
              </p>
              <ul className="mt-8 space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-border/50 pt-8">
                <div>
                  <div className="font-display text-3xl font-bold text-gold">5+</div>
                  <div className="mt-1 text-xs text-muted-foreground">Yıl Deneyim</div>

                </div>
                <a
                  href={googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-colors hover:text-gold"
                >
                  <div className="font-display text-3xl font-bold text-gold group-hover:text-gold/80">
                    100+
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                    <MessageSquare className="size-3" />
                    Mutlu Müşteri (Google Yorumları)
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="iletisim" className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gold-gradient opacity-10" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            ARACINIZI ELLERİMİZE BIRAKIN
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ücretsiz keşif ve fiyat bilgisi için bizi arayın. Randevu alarak aracınızı korumaya
            başlayın.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <a href={phoneHref} className={primaryButtonClass}>
              <Phone className="size-5" />
              +90 552 299 06 72
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={whatsappButtonClass}>
              <WhatsAppIcon className="size-5" />
              WhatsApp'tan Yaz
            </a>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className={outlineGoldButtonClass}>
              <Navigation className="size-5" />
              Yol Tarifi Al
            </a>
          </div>
          <div className="mt-10 inline-flex flex-col items-start gap-2 rounded-xl border border-border bg-card p-6 text-left sm:flex-row sm:items-center sm:gap-8">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-gold"
            >
              <MapPin className="size-5 text-gold" />
              <span className="text-sm">
                Gültepe Mah. Yeni Sanayi Sitesi 15. Sokak No: J/18, Batman
              </span>
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Clock className="size-5 text-gold" />
              <span className="text-sm">Pzt - Cmt: 09:00 - 19:00</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
