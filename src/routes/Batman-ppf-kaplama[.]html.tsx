import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Shield, Sun, Sparkles, ArrowLeft } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-button";

const whatsappUrl =
  "https://wa.me/905522990672?text=" +
  encodeURIComponent("Batman PPF kaplama fiyat teklifi almak istiyorum.");

const canonical =
  "https://gold-garage-shine.lovable.app/Batman-ppf-kaplama.html";

export const Route = createFileRoute("/Batman-ppf-kaplama.html")({
  head: () => ({
    meta: [
      {
        title:
          "Batman PPF Kaplama | Diyarbakır & Siirt Araç Boya Koruma Filmi",
      },
      {
        name: "description",
        content:
          "Batman, Diyarbakır ve Siirt'te sararmayan, kendi kendini yenileyen TPU PPF kaplama çözümleri. Bölgenin güneş sıcağına karşı garantili boya koruma filmi paketleri.",
      },
      {
        name: "keywords",
        content:
          "batman ppf kaplama, diyarbakır araç kaplama, siirt boya koruma filmi, tpu ppf kaplama fiyatları, şeffaf kaput koruma",
      },
      {
        property: "og:title",
        content:
          "Batman PPF Kaplama | Diyarbakır & Siirt Araç Boya Koruma Filmi",
      },
      {
        property: "og:description",
        content:
          "Batman merkezli premium TPU PPF kaplama. Diyarbakır ve Siirt'e hizmet, sararmama garantili boya koruma filmi.",
      },
      { property: "og:url", content: canonical },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "PPF kaplama sökülürken orijinal boyaya zarar verir mi?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Hayır. Merkezimizde kullanılan poliüretan bazlı (TPU) premium filmler, yıllar sonra sökülse dahi araç boyasına veya verniğine asla zarar vermez, iz bırakmaz.",
              },
            },
            {
              "@type": "Question",
              name: "PPF kaplama fiyatları neye göre belirlenir?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Fiyatlar aracınızın marka/model boyutuna (Sedan, SUV, Hatchback) ve seçtiğiniz pakete (Ön üçlü veya Komple) göre değişiklik gösterir.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: BatmanPpfPage,
});

const benefits = [
  {
    icon: Sun,
    title: "Aşırı Yaz Sıcakları ve UV Koruması",
    text: "Batman ve Diyarbakır'ın 40°C'yi aşan yaz sıcaklarında, kalitesiz filmler sararır ve araç boyasına yapışır. Biz sadece güneş ışınlarına dayanıklı, sararmama garantili Orijinal TPU (Poliüretan) filmler kullanıyoruz.",
  },
  {
    icon: Shield,
    title: "Taş Vurukları ve Şehirlerarası Yol Koruması",
    text: "Batman - Diyarbakır ve Batman - Siirt yollarındaki mıcırlardan, taş fırlamalarından oluşan kaput hasarlarını %100 engeller.",
  },
  {
    icon: Sparkles,
    title: "Kendi Kendini Onarma (Self-Healing)",
    text: "Aracınızın yüzeyinde oluşan kılcal çizikler ve dükkan tozları, güneş ısısı veya sıcak suyla saniyeler içinde kendi kendine kaybolur.",
  },
];

function BatmanPpfPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
      >
        <ArrowLeft className="size-4" /> Ana Sayfa
      </Link>

      <h1 className="mt-6 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
        Batman, Diyarbakır ve Siirt Profesyonel{" "}
        <span className="text-gold">PPF Kaplama</span> (Boya Koruma Filmi)
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        Güneydoğu Anadolu bölgesinin zorlu iklim şartlarında aracınızın ilk
        günkü parlaklığını korumak lüks değil, bir ihtiyaçtır. Batman merkezli
        uygulama merkezimizde, <span className="font-semibold text-gold">Diyarbakır</span>{" "}
        ve <span className="font-semibold text-gold">Siirt</span> illeri dahil
        tüm bölgeye premium PPF kaplama hizmeti sunuyoruz.
      </p>

      <h2 className="mt-12 font-display text-2xl font-bold text-foreground sm:text-3xl">
        Bölge Şartlarına Özel Neden TPU PPF Kaplama Yaptırmalısınız?
      </h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="rounded-xl border border-border bg-card p-6"
          >
            <div className="inline-flex rounded-lg bg-gold/10 p-3 text-gold">
              <b.icon className="size-6" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-card-foreground">
              {b.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {b.text}
            </p>
          </div>
        ))}
      </div>

      <h2 className="mt-12 font-display text-2xl font-bold text-foreground sm:text-3xl">
        PPF Kaplama Paket Seçeneklerimiz
      </h2>

      <div className="mt-6 space-y-6">
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="font-display text-xl font-semibold text-gold">
            1. Ön Üçlü Koruma Paketi (Giriş Seviyesi)
          </h3>
          <p className="mt-3 text-muted-foreground">
            Yolculuk esnasında en çok darbeye maruz kalan; Kaput, Sağ/Sol Ön
            Çamurluklar, Ön Tampon ve Farlar profesyonelce kaplanır.
          </p>
        </div>
        <div className="rounded-xl border border-gold/40 bg-card p-6">
          <h3 className="font-display text-xl font-semibold text-gold">
            2. Komple Kusursuz Koruma Paketi (Tam Koruma)
          </h3>
          <p className="mt-3 text-muted-foreground">
            Aracın tüm kaporta aksamı (tavan ve bagaj dahil) sıfır hata kıvırma
            işçiliğiyle şeffaf koruma altına alınır. Dışarıdan bakıldığında film
            olduğu anlaşılmaz.
          </p>
        </div>
      </div>

      <h2 className="mt-12 font-display text-2xl font-bold text-foreground sm:text-3xl">
        Sıkça Sorulan Sorular
      </h2>

      <div className="mt-6 space-y-5">
        <div>
          <h3 className="font-semibold text-foreground">
            PPF kaplama sökülürken orijinal boyaya zarar verir mi?
          </h3>
          <p className="mt-2 flex gap-2 text-muted-foreground">
            <CheckCircle2 className="mt-1 size-5 shrink-0 text-gold" />
            Hayır. Merkezimizde kullanılan poliüretan bazlı (TPU) premium
            filmler, yıllar sonra sökülse dahi araç boyasına veya verniğine
            asla zarar vermez, iz bırakmaz.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground">
            PPF kaplama fiyatları neye göre belirlenir?
          </h3>
          <p className="mt-2 flex gap-2 text-muted-foreground">
            <CheckCircle2 className="mt-1 size-5 shrink-0 text-gold" />
            Fiyatlar aracınızın marka/model boyutuna (Sedan, SUV, Hatchback) ve
            seçtiğiniz pakete (Ön üçlü veya Komple) göre değişiklik gösterir.
            Net fiyat için lütfen bizimle iletişime geçin.
          </p>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border-l-4 border-gold bg-secondary p-8">
        <h3 className="font-display text-2xl font-bold text-foreground">
          Batman & Diyarbakır PPF Kaplama Randevusu Alın
        </h3>
        <p className="mt-3 text-muted-foreground">
          Aracınızın marka ve modelini belirterek WhatsApp üzerinden hızlıca
          güncel kampanyalar hakkında bilgi alabilirsiniz.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-md bg-whatsapp px-6 py-3 text-base font-semibold text-whatsapp-foreground shadow transition-colors hover:bg-whatsapp/90"
        >
          <WhatsAppIcon className="size-5" />
          WhatsApp ile Fiyat Al &amp; Randevu Oluştur
        </a>
      </div>
    </article>
  );
}
