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
    <section id="events" className="relative overflow-hidden min-h-[800px]">
      <Image
        src="/event/image.png"
        alt="Event Hall"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-hotel-dark/65" />

      <div className="relative max-w-7xl mx-auto h-full min-h-[680px] flex flex-col justify-between pt-[240px]">
        <div className="max-w-[632px]">
          <p className="text-[#C9A961] text-[16px] font-normal font-roboto-slab tracking-[0.2em] uppercase border-l-2 border-gold pl-3 mb-5">
            Event Halls
          </p>
          <h2 className="text-white text-3xl md:text-[40px] mb-6 font-semibold leading-snug font-cormorant italic">
            Томоохон Арга Хэмжээний Танхимууд
          </h2>
          <p className="text-gray-100 font-normal text-[16px] leading-relaxed mb-10">
            Хурим, хурал, арга хэмжээ бүрийг төгс уур амьсгалд зохион байгуулах орчин. Орчин үеийн тоног төхөөрөмж, уужим орон зай, мэргэжлийн үйлчилгээ — таны онцгой мөч бүрийг мартагдашгүй болгоно.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-43">
          {halls.map((hall) => (
            <div
              key={hall.name}
              className=" pl-4 border-l-2 border-gold"
            >
              <p className="text-gold text-[16px] font-semibold tracking-[0.2em] uppercase mb-[2px]">
                {hall.type}
              </p>
              <h3 className="text-white text-[28px] font-cormorant font-bold leading-9 mb-[2px]">
                {hall.name}
              </h3>
              <p className="text-white text-[16px] font-roboto-slab font-light mt-[8px]">{hall.capacity}</p>
            </div>
          ))}
        </div>
        <div className="">
           <button className="border border-white text-white hover:bg-white hover:text-hotel-dark text-xs tracking-[0.2em] uppercase px-8 py-3 transition-colors inline-flex items-center gap-3">
            Дэлгэрэнгүй үнших
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
