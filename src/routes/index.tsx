import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Wrench,
  Sun,
  Car,
  MapPin,
  Phone,
  Clock,
  Award,
  Instagram,
  CheckCircle2,
} from "lucide-react";
import heroGarage from "@/assets/hero-garage.jpg";
import servicePpf from "@/assets/service-ppf.jpg";

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
  },
  {
    icon: Wrench,
    title: "Boyasız Göçük Düzeltme",
    description:
      "Boya işlemi yapmadan, orijinal görünümü bozmadan göçük ve eziklerinizi özel araçlarla düzeltiyoruz.",
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

const locations = ["Batman", "Diyarbakır", "Siirt"];

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
              <Button asChild size="lg" className="text-base">
                <a href="tel:+905522990672" className="inline-flex items-center gap-2">
                  <Phone className="size-5" />
                  Hemen Ara
                </a>
              </Button>
              <Button asChild variant="gold-outline" size="lg" className="text-base">
                <a href="#hizmetler">Hizmetlerimizi Keşfet</a>
              </Button>
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
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-gold/50 hover:bg-accent"
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
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border/50 pt-8">
                <div>
                  <div className="font-display text-3xl font-bold text-gold">10+</div>
                  <div className="mt-1 text-xs text-muted-foreground">Yıllık Deneyim</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-gold">1000+</div>
                  <div className="mt-1 text-xs text-muted-foreground">Mutlu Müşteri</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-gold">3</div>
                  <div className="mt-1 text-xs text-muted-foreground">Hizmet Verilen İl</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              HİZMET VERDİĞİMİZ İLLER
            </h2>
            <p className="mt-4 text-muted-foreground">
              Batman merkezli olup, çevre illere de profesyonel araç kaplama ve onarım hizmeti
              sunuyoruz.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {locations.map((location) => (
              <div
                key={location}
                className="flex items-center gap-3 rounded-full border border-gold/30 bg-gold/5 px-6 py-3 text-gold"
              >
                <MapPin className="size-5" />
                <span className="font-display text-lg font-semibold">
                  {location} PPF Araç Kaplama
                </span>
              </div>
            ))}
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
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Button asChild size="lg" className="text-base">
              <a href="tel:+905522990672" className="inline-flex items-center gap-2">
                <Phone className="size-5" />
                +90 552 299 06 72
              </a>
            </Button>
            <Button asChild variant="gold-outline" size="lg" className="text-base">
              <a
                href="https://www.instagram.com/goldgarageotomotiv/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Instagram className="size-5" />
                Instagram'dan Takip Et
              </a>
            </Button>
          </div>
          <div className="mt-10 inline-flex flex-col items-start gap-2 rounded-xl border border-border bg-card p-6 text-left sm:flex-row sm:items-center sm:gap-8">
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="size-5 text-gold" />
              <span className="text-sm">
                Gültepe Mah. Yeni Sanayi Sitesi 15. Sokak No: J/18, Batman
              </span>
            </div>
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
