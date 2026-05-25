import Link from "next/link";

export default function RoomsCTA() {
  return (
    <section className="bg-[#f0ebe0] pb-[21px]">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="font-roboto-slab text-[10px] tracking-[0.4em] uppercase text-gold pb-6">
          ЗАХИАЛГА
        </p>
        <h2 className="font-cormorant text-hotel-dark text-5xl md:text-[58px] leading-tight">
          Таны төгс амралт
        </h2>
        <h2 className="font-cormorant italic text-gold text-5xl md:text-[58px] leading-tight mb-8">
          эндээс эхэлнэ.
        </h2>
        <p className="text-gray-500 text-[16px] leading-relaxed pb-10">
          Тансаг орчин, нарийн үйлчилгээ, төгс амралтын мэдрэмж — Bishrelt Hotel-д таныг хүлээж байна.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="#booking"
            className="bg-gold text-gray-900 text-[11px] tracking-[0.22em] uppercase px-8 py-3.5 hover:bg-gold-dark transition-colors inline-flex items-center gap-3"
          >
            ӨРӨӨ ЗАХИАЛАХ
          </Link>
          <Link
            href="#contact"
            className="border border-gray-500 text-gray-500 text-[11px] tracking-[0.22em] uppercase px-8 py-3.5 hover:bg-hotel-dark hover:text-white transition-colors inline-flex items-center"
          >
            ХОЛБОО БАРИХ
          </Link>
        </div>
      </div>
    </section>
  );
}
