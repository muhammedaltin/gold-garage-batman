import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Hasan Bey",
    car: "Audi A6",
    text: "Aracımı bu arkadaşların yanında yaptırdım PPF kaplama. Arkadaşlar gerçekten de son derece işleri çok düzgün ve temiz yapıyor ve çok dürüst arkadaşlar, herkese de tavsiye ediyorum. Audi A6'mın ön kaput, sağ-sol çamurluk ve farlarını yaptırdım. Adamlar gerçekten çok güzel yapıyor, ellerine kollarına sağlık.",
  },
  {
    name: "Kasım Bey",
    car: "Skoda Superb",
    text: "Ustamızın işçiliği işin hakkını veriyor. Skoda Superb 2021 model sol kapıda kaza sonucu göçük oluştu, çok güzel bir işçilikle eski haline getirdi. Emeğine sağlık.",
  },
  {
    name: "Rıdvan Bey",
    car: "Peugeot 2008",
    text: "Aracım Peugeot 2008 sol ön çamurluk ve sol ön kapı baya hasar almıştı. Sağolsun ustamız elinden geleni yaptı, ekspertiz raporunda bile belli olmadı. Ellerine emeğine sağlık, Allah kolaylık ve bol rızık versin. Teşekkürler 🖤",
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <article className="relative flex w-[340px] shrink-0 flex-col gap-4 rounded-2xl border border-gold/20 bg-card p-6 shadow-lg sm:w-[400px]">
      <Quote className="absolute right-4 top-4 size-8 text-gold/20" />
      <div className="flex items-center gap-1 text-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-gold" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground line-clamp-6">
        "{t.text}"
      </p>
      <div className="mt-auto border-t border-border/50 pt-4">
        <div className="font-display text-base font-semibold text-foreground">
          {t.name}
        </div>
        <div className="text-xs uppercase tracking-wide text-gold">
          {t.car}
        </div>
      </div>
    </article>
  );
}

export function TestimonialsMarquee() {
  const loop = [...testimonials, ...testimonials];
  return (
    <section
      aria-label="Müşteri yorumları"
      className="relative overflow-hidden border-t border-border/50 bg-secondary py-16"
    >
      <div className="mx-auto mb-10 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          MÜŞTERİ <span className="text-gold">YORUMLARI</span>
        </h2>
        <p className="mt-3 text-muted-foreground">
          Gold Garage'a güvenen araç sahiplerinden gerçek deneyimler.
        </p>
      </div>
      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max gap-6 animate-marquee">
          {loop.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
