import Image from "next/image";

const halls = [
  {
    type: "Уулзалтын өрөо",
    name: "Crystal Өрөө",
    capacity: "10-25 хүн",
  },
  {
    type: "Хурлын танхим",
    name: "Royal Танхим",
    capacity: "50 хүртэлх хүн",
  },
  {
    type: "Event танхим",
    name: "Diamond Танхим",
    capacity: "50 хүртэлх хүн",
  },
];

export default function EventHalls() {
  return (
    <section id="events" className="relative overflow-hidden">
      {/* Background image */}
      <div className="relative" style={{ minHeight: "680px" }}>
        <Image
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=80"
          alt="Event Hall"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-hotel-dark/65" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between px-10 md:px-[10%] py-16">
          {/* Top text */}
          <div className="max-w-lg">
            <p className="text-gold text-xs tracking-[0.2em] uppercase border-l-2 border-gold pl-3 mb-5">
              Event Halls
            </p>
            <h2
              className="text-white text-3xl md:text-5xl mb-6 leading-snug"
              style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic" }}
            >
              Томоохон Арга Хэмжээний Танхимууд
            </h2>
            <p className="text-white/65 text-sm leading-relaxed mb-10 max-w-md">
              Хурим, хурал, арга хэмжээ бүрийг төгс уур амьсгалд зохион
              байгуулах орчин. Орчин үеийн тоног төхөөрөмж, уужим орон зай,
              мэргэжлийн үйлчилгээ — таны өнгөтэй мөч бүрийг мартагдашгүй
              болгоно.
            </p>
            <button className="border border-white text-white hover:bg-white hover:text-hotel-dark text-xs tracking-[0.2em] uppercase px-8 py-3 transition-colors inline-flex items-center gap-3">
              Дэлгэрэнгүй үнших
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Bottom hall cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/20 pt-8">
            {halls.map((hall, i) => (
              <div
                key={hall.name}
                className={`py-4 pr-8 ${i < halls.length - 1 ? "border-r border-white/20 mr-8" : ""}`}
              >
                <p className="text-gold text-xs tracking-[0.2em] uppercase mb-2">
                  {hall.type}
                </p>
                <h3
                  className="text-white text-2xl mb-1"
                  style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic" }}
                >
                  {hall.name}
                </h3>
                <p className="text-white/55 text-sm">{hall.capacity}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
