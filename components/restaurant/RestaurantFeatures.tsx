import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = {
  dict: Dictionary["restaurantPage"]["features"];
};

const icons = {
  cuisine: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
  ),
  wine: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3h6l1 8a4 4 0 01-8 0L9 3zM12 15v6M8 21h8" />
    </svg>
  ),
  private: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
    </svg>
  ),
  hours: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export default function RestaurantFeatures({ dict }: Props) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.map((feature, i) => (
            <div key={i} className="border border-gray-100 p-8 hover:border-gold/30 transition-colors  bg-[#FEFAF2]">
              <span className="text-gold mb-5 block">
                {icons[feature.icon as keyof typeof icons]}
              </span>
              <h3 className="font-cormorant font-semibold text-hotel-charcoal text-[18px] mb-3 leading-snug">
                {feature.title}
              </h3>
              {feature.desc && (
                <p className="text-gray-400 text-[13px] leading-relaxed">{feature.desc}</p>
              )}
              {feature.hours && (
                <div className="space-y-1.5 mt-1">
                  {feature.hours.map((h, j) => (
                    <p key={j} className="text-gray-400 text-[13px]">{h}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
