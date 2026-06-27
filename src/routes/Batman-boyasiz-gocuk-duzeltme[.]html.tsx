import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Wrench, Clock, ShieldCheck, ArrowLeft } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-button";

const whatsappUrl =
  "https://wa.me/905522990672?text=" +
  encodeURIComponent(
    "Batman boyasiz gocuk duzeltme icin fotograf gondermek istiyorum.",
  );

const canonical =
  "https://gold-garage-batman.lovable.app/Batman-boyasiz-gocuk-duzeltme.html";

export const Route = createFileRoute("/Batman-boyasiz-gocuk-duzeltme.html")({
  head: () => ({
    meta: [
      {
        title:
          "Batman Boyasız Göçük Düzeltme | PDR Hasar Onarımı & Dolu Tamiri",
      },
      {
        name: "description",
        content:
          "Batman, Diyarbakır ve Siirt'te boyasız göçük düzeltme (PDR) hizmeti. Orijinallik bozulmadan, boyasız ve macunsuz dolu hasarı, kapı ve kaporta göçüğü onarımı.",
      },
      {
        name: "keywords",
        content:
          "batman boyasız göçük düzeltme, diyarbakır pdr göçük, siirt dolu hasarı tamiri, boyasız kaporta tamiri fiyatı, oto göçük sihirbazı",
      },
      {
        property: "og:title",
        content:
          "Batman Boyasız Göçük Düzeltme | PDR Hasar Onarımı & Dolu Tamiri",
      },
      {
        property: "og:description",
        content:
          "Batman merkezli profesyonel boyasız göçük düzeltme. Diyarbakır ve Siirt'e hizmet, dolu hasarı onarımı ve kaporta göçük düzeltme.",
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
              name: "Boyasız göçük düzeltme hangi durumlarda uygulanmaz?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Eğer göçüğün olduğu bölgede boya tamamen çatlamış, kalkmış veya saç aşırı derecede esneyip özelliğini yitirmişse boyasız göçük düzeltme işlemi tam verimli olmayabilir. Göçüğün fotoğrafını göndererek ücretsiz ön inceleme talep edebilirsiniz.",
              },
            },
            {
              "@type": "Question",
              name: "Batman'da boyasız göçük düzeltme ne kadar sürer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Küçük kapı ve çamurluk göçükleri genellikle 1 ila 3 saat arasında teslim edilir. Büyük çaplı dolu hasarı onarımları ise hasarın ve işletmenin yoğunluğuna göre birkaç iş günü sürebilir.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: BatmanPdrPage,
});

const benefits = [
  {
    icon: ShieldCheck,
    title: "Değer Kaybı Yaşanmaz",
    text: "Aracınıza boya, macun veya lokal boya sürülmediği için tramerde hasar kaydı oluşmaz. Aracınız tamamen orijinal kalır.",
  },
  {
    icon: Clock,
    title: "Ekonomik ve Hızlı",
    text: "Geleneksel kaporta boya işlemlerine göre çok daha az maliyetlidir ve aracınız dükkanda günlerce değil, genellikle aynı gün içinde teslim edilir.",
  },
  {
    icon: Wrench,
    title: "Dolu Hasarı Onarımı",
    text: "Bölgede zaman zaman yaşanan dolu yağışlarının araç üzerinde bıraktığı yüzlerce küçük göçüğü mikron hassasiyetinde onarıyoruz.",
  },
];

const serviceAreas = [
  "Park Halinde Sürtme ve Çarpma Göçükleri",
  "Kapı ve Çamurluk Göçükleri",
  "Dolu Hasarı Profesyonel PDR Tamiri",
  "Yüksek Hassasiyetli Kaporta Masajı",
];

function BatmanPdrPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
      >
        <ArrowLeft className="size-4" /> Ana Sayfa
      </Link>

      <h1 className="mt-6 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
        Batman Boyasız Göçük Düzeltme (PDR) | Profesyonel Kaporta Onarımı
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        Aracınızda oluşan park hasarları, kapı çarpmaları veya dolu yağışı
        kaynaklı göçükleri, aracınızın değerini düşürmeden ilk günkü haline
        getiriyoruz. <span className="font-semibold text-gold">Batman</span>,{" "}
        <span className="font-semibold text-gold">Diyarbakır</span> ve{" "}
        <span className="font-semibold text-gold">Siirt</span> bölgelerinde
        orijinal boyayı koruyarak kusursuz işçilik sunuyoruz.
      </p>

      <h2 className="mt-12 font-display text-2xl font-bold text-foreground sm:text-3xl">
        Boyasız Göçük Düzeltme (PDR) Nedir ve Avantajları Nelerdir?
      </h2>

      <p className="mt-6 text-muted-foreground">
        PDR (Paintless Dent Repair), aracın kaporta yüzeyinde boyanın zarar
        görmediği durumlarda uygulanan özel bir masaj tekniğidir. Özel çubuklar
        ve arkadan itme teknikleriyle hasar sıfırlanır.
      </p>

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
        Hizmet Alanlarımız
      </h2>

      <ul className="mt-6 space-y-3">
        {serviceAreas.map((area) => (
          <li key={area} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
            <span className="text-muted-foreground">{area}</span>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 font-display text-2xl font-bold text-foreground sm:text-3xl">
        Sıkça Sorulan Sorular
      </h2>

      <div className="mt-6 space-y-5">
        <div>
          <h3 className="font-semibold text-foreground">
            Boyasız göçük düzeltme hangi durumlarda uygulanmaz?
          </h3>
          <p className="mt-2 flex gap-2 text-muted-foreground">
            <CheckCircle2 className="mt-1 size-5 shrink-0 text-gold" />
            Eğer göçüğün olduğu bölgede boya tamamen çatlamış, kalkmış veya saç
            aşırı derecede esneyip özelliğini yitirmişse boyasız göçük düzeltme
            işlemi tam verimli olmayabilir. Göçüğün fotoğrafını göndererek
            ücretsiz ön inceleme talep edebilirsiniz.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground">
            Batman'da boyasız göçük düzeltme ne kadar sürer?
          </h3>
          <p className="mt-2 flex gap-2 text-muted-foreground">
            <CheckCircle2 className="mt-1 size-5 shrink-0 text-gold" />
            Küçük kapı ve çamurluk göçükleri genellikle 1 ila 3 saat arasında
            teslim edilir. Büyük çaplı dolu hasarı onarımları ise hasarın ve
            işletmenin yoğunluğuna göre birkaç iş günü sürebilir.
          </p>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border-l-4 border-gold bg-secondary p-8">
        <h3 className="font-display text-2xl font-bold text-foreground">
          Fotoğraf Gönderin, Ön Görüş Alın!
        </h3>
        <p className="mt-3 text-muted-foreground">
          Göçüğün olduğu bölgeyi farklı açılardan fotoğraflayıp ya da kısa bir
          video çekip bize WhatsApp üzerinden ileterek anında fiyat bilgisi
          alabilirsiniz.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-md bg-whatsapp px-6 py-3 text-base font-semibold text-whatsapp-foreground shadow transition-colors hover:bg-whatsapp/90"
        >
          <WhatsAppIcon className="size-5" />
          WhatsApp ile Fotoğraf Gönder &amp; Fiyat Al
        </a>
      </div>
    </article>
  );
}
