import Image from "next/image";

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
      </svg>
    ),
    title: "Мишелинээс санаа авсан хоол",
    desc: "Орчин үеийн технологи бүхий шинэлэг хоол",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v1m6-1v1M5 8h14M5 8a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2v-8a2 2 0 00-2-2M8 13h.01M12 13h.01M16 13h.01" />
      </svg>
    ),
    title: "Дарсны зоорь",
    desc: "Дэлхийн хамгийн шилдэг бус нутгуудаас 300+ төрлийн дарсны цуглуулга",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7h18M3 12h18M3 17h18" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 3v4M16 3v4" />
      </svg>
    ),
    title: "Хувийн хоолны өрөөнүүд",
    desc: "Бизнесийн хурал болон хувийн арга хэмжээнд зориулсан тусдаа өрөөнүүд",
  },
];

export default function Restaurant() {
  return (
    <section id="restaurant" className="bg-hotel-cream">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Text */}
        <div className="px-12 md:px-[8%] py-16 flex flex-col justify-center">
          <p className="text-gold text-xs tracking-[0.2em] uppercase border-l-2 border-gold pl-3 mb-5">
            Restaurant
          </p>
          <h2
            className="text-hotel-dark text-3xl md:text-4xl mb-6"
            style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic" }}
          >
            Embassy Restaurant
          </h2>
          <p className="text-hotel-charcoal/65 text-sm leading-relaxed mb-10">
            Манай өвөрмөц тансаг зэрэглэлийн ресторанд хоолны гайхалтай амтыг
            мэдрээрэй. Шагнал хүртсэн тогооч нар зөвхөн улирлын чанартай
            хамгийн сайн орцуудыг ашиглан Монголын өв уламжлалыг орчин үеийн
            хоолтой хослуулан тансаг хоол хийдэг.
          </p>

          <ul className="space-y-6 mb-10">
            {features.map((f) => (
              <li key={f.title} className="flex items-start gap-4">
                <span className="text-gold mt-0.5 shrink-0">{f.icon}</span>
                <div>
                  <p className="text-hotel-dark text-sm font-medium mb-0.5">{f.title}</p>
                  <p className="text-hotel-charcoal/55 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <button className="border border-hotel-dark text-hotel-dark hover:bg-hotel-dark hover:text-white text-xs tracking-[0.2em] uppercase px-8 py-3 transition-colors inline-flex items-center gap-3 self-start">
            Дэлгэрэнгүй унших
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Image */}
        <div className="relative h-[500px] md:h-auto overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80"
            alt="Embassy Restaurant"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
