import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = {
  dict: Dictionary["eventsPage"]["stats"];
};

export default function EventsStats({ dict }: Props) {
  return (
    <section className="py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {dict.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-6 md:py-0 px-4 text-center">
              <span className="font-roboto-slab font-semibold text-gold text-[36px] md:text-[32px] leading-none mb-2">
                {stat.value}
              </span>
              <span className="text-gray-500 font-normal text-[10px] tracking-[0.2em] uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
