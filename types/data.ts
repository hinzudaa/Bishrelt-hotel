export const CATEGORIES = ["ALL", "DELUXE", "SUITE", "SIGNATURE"] as const;
export type Category = (typeof CATEGORIES)[number];

export type Amenity =
  | "kingSizeBed"
  | "twinBeds"
  | "privateJacuzzi"
  | "wifi"
  | "smartTV"
  | "miniBar"
  | "cityView"
  | "panoramaView"
  | "safe"
  | "marbleBathroom"
  | "climateControl"
  | "roomService24"
  | "workDesk"
  | "privateKitchen"
  | "butlerService";

export type Room = {
  id: number;
  name: string;
  subtitle: string;
  type: Category;
  price: string;
  area: number;
  guests: number;
  description: string;
  descriptionEn: string;
  detailMn: string[];
  detailEn: string[];
  image: string;
  galleryImages: string[];
  amenities: Amenity[];
};

export const roomsData: Room[] = [
  {
    id: 1,
    name: "Deluxe King Room",
    subtitle: "Тансаг king size ор, орчин үеийн интерьер бүхий тав тухтай амралтын орон зай.",
    type: "DELUXE",
    price: "₮185,000",
    area: 38,
    guests: 2,
    description:
      "Deluxe King өрөө нь бидний хамгийн их эрэлттэй өрөө юм — 38м² талбайтай, дулаахан, тухтай орон зай бөгөөд тэнгэрийн хаяатай үзэмж, хурзэлгэдэх хэмжээтэй ортой.",
    descriptionEn:
      "Our most in-demand room — 38㎡ of warm, comfortable space with a skyline view and a king-sized bed you'll sink into.",
    detailMn: [
      "Bishrelt Deluxe King өрөө нь тансаг зэрэглэлийн тав тух, орчны уянга болон хотын гайхамшигт панорама үзэмжийг нэгтгэсэн өрөө юм. 38м² уужим орон зайд байрлах king size ор нь Египетийн өндөр чанарын даавуугаар бүрхэгдсэн бөгөөд гүн нойр авч бүрэн амрахад зориулагдсан.",
      "Мармарт угаалгын өрөө, ухаалаг климат контролийн систем, 24 цагийн room service болон нарийн хийц бүхий minibar нь тав таламжийн хамгийн дээд шаардлагыг хангана. Хотын тэнгэрийн хаяатай үзэмжийг эдэлж буй бөгөөд та амралт, бизнесийн аялал хоёуланд нь ирж болно.",
      "Дотоод засал чимэглэл нь орчин үеийн Монгол урлагийн уламжлалаас санаа авсан бөгөөд хүйтэн шаргал өнгийн тон, дулаахан гэрэлтүүлэгтэй хослон таныг гэртээ байгаа мэт тайван санагдуулна."
    ],
    detailEn: [
      "The Bishrelt Deluxe King Room is a refined sanctuary where luxury comfort meets the breathtaking panorama of Ulaanbaatar. Set within 38㎡ of thoughtfully designed space, the king-size bed is dressed in Egyptian-cotton linens and premium bedding crafted for the deepest rest.",
      "A marble-clad bathroom, intelligent climate-control system, 24-hour room service, and a carefully curated minibar ensure every comfort is within reach — silently and efficiently. Floor-to-ceiling windows frame the city skyline, making this room equally perfect for business travelers and those seeking pure relaxation.",
      "The interior draws on contemporary Mongolian art motifs paired with warm amber lighting and clean-line furnishings, creating an atmosphere that feels both cosmopolitan and intimately welcoming."
    ],
    image: "/room/image.png",
    galleryImages: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe2e2?w=800&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    ],
    amenities: [
      "kingSizeBed",
      "cityView",
      "privateJacuzzi",
      "wifi",
      "smartTV",
      "miniBar",
      "safe",
      "marbleBathroom",
      "climateControl",
      "roomService24",
    ],
  },
  {
    id: 2,
    name: "Deluxe Twin Room",
    subtitle: "Twin Bed · Skyline Window",
    type: "DELUXE",
    price: "₮185,000",
    area: 38,
    guests: 2,
    description:
      "Deluxe Twin өрөө нь хоёр тусдаа ортой, 38м² талбайтай тохилог орон зай юм. Хот даяарх үзэмжтэй, бүрэн тоноглогдсон, орчин үеийн тансаг байдлыг хүргэнэ.",
    descriptionEn:
      "The Deluxe Twin features two separate beds in a 38㎡ elegant space with city views, fully equipped with modern luxury.",
    detailMn: [
      "Deluxe Twin өрөө нь найзуудын болон бизнесийн аяллын хосуудад зориулсан хамгийн сайн сонголт юм. 38м² орон зайд хоёр тусдаа ор байрлах бөгөөд хоорондоо бүрэн тусгаарлагдсан тайван орчинг бүрдүүлнэ.",
      "Хотын үзэмжтэй уужим цонх, гантиг угаалгын өрөө, ухаалаг климат систем болон шуурхай WiFi нь таны амралтын туршлагыг бүрэн дүүрэн болгоно.",
      "Зочны тоног төхөөрөмж бүрэн тоноглогдсон бөгөөд orчин үеийн минималист дизайн нь дулаахан, тохилог уур амьсгалыг бий болгодог."
    ],
    detailEn: [
      "The Deluxe Twin Room is the ideal choice for friends travelling together or business colleagues who value both proximity and personal space. Two full-size beds sit within a 38㎡ space designed to feel spacious and serene.",
      "City-view windows, a marble bathroom, smart climate control, and high-speed Wi-Fi ensure every comfort is covered. The room's clean-line aesthetic and warm lighting deliver a modern yet welcoming atmosphere.",
      "Fully stocked with premium amenities, the Deluxe Twin strikes the perfect balance between functionality and refined luxury."
    ],
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe2e2?w=800&q=80",
    ],
    amenities: [
      "twinBeds",
      "cityView",
      "wifi",
      "smartTV",
      "miniBar",
      "safe",
      "marbleBathroom",
      "climateControl",
    ],
  },
  {
    id: 3,
    name: "Deluxe Suite Room",
    subtitle: "King Bed · Skyline Window",
    type: "DELUXE",
    price: "₮250,000",
    area: 52,
    guests: 2,
    description:
      "Deluxe Suite нь тусдаа зочны болон нойрны өрөөтэй, 52м² уужим орон зай юм. Хотын панорама дүр зурааг эдлэн жаргаж, бүрэн хувийн тайван амрал авна уу.",
    descriptionEn:
      "The Deluxe Suite offers a separate living and sleeping area in a spacious 52㎡. Enjoy panoramic city views and complete private tranquility.",
    detailMn: [
      "Deluxe Suite нь тусдаа зочны болон нойрны өрөөтэй 52м² уужим орон зай бөгөөд Bishrelt Hotel-ийн хамгийн алдартай тансаг сонголтуудын нэг юм. Хотын гайхамшигт панорама үзэмжийг эдлэн таны бүрэн хувийн тайвшралыг хангах боломжтой.",
      "Хувийн жакузи, мармарт угаалгын өрөө, ухаалаг гэрэл ба климат систем нь тансаг амралтын мэдрэмжийг бүрэн бүтэн болгоно. Зочны өрөөнд байрлах тухтай буйдан нь амарч, уншиж, эсвэл жижиг хурал явуулахад тохиромжтой.",
      "Орчин үеийн дизайн нь Монголын уламжлалт урлагийн сэдэлтэй хосолж, таны байрлах туршлагыг шинэ түвшинд хүргэнэ."
    ],
    detailEn: [
      "The Deluxe Suite elevates your stay with a dedicated living area and a private bedroom spread across a generous 52㎡. Panoramic city windows stretch across the entire facade, bathing the suite in natural light and sweeping Ulaanbaatar views.",
      "A private jacuzzi, marble bathroom, intelligent lighting and climate systems complete the luxury experience. The separate lounge is ideal for unwinding, reading, or holding an intimate meeting.",
      "Contemporary design fused with Mongolian artistic motifs gives the Deluxe Suite a character that is at once globally refined and distinctly local."
    ],
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&q=80",
    ],
    amenities: [
      "kingSizeBed",
      "panoramaView",
      "privateJacuzzi",
      "wifi",
      "smartTV",
      "miniBar",
      "safe",
      "marbleBathroom",
      "climateControl",
      "roomService24",
    ],
  },
  {
    id: 4,
    name: "Executive Room",
    subtitle: "King Bed · City View",
    type: "DELUXE",
    price: "₮220,000",
    area: 42,
    guests: 2,
    description:
      "Executive Room нь бизнесийн зочдод зориулагдсан бөгөөд ажлын ширээ, хурдан интернэт холболт, хотын гоё үзэмжтэй 42м² тансаг өрөө юм.",
    descriptionEn:
      "Designed for business travelers, the Executive Room offers a work desk, high-speed internet, and beautiful city views in a luxurious 42㎡ space.",
    detailMn: [
      "Executive Room нь бизнесийн зочдод зориулагдсан бөгөөд ажлын болон амралтын хэрэгцээг нэгэн зэрэг хангах боломжтой 42м² тансаг өрөө юм. Өргөн уужим ажлын ширээ, хурдан WiFi болон хотын гайхалтай үзэмж нь таны бүтээмжийг нэмэгдүүлнэ.",
      "King size ор, гантиг угаалгын өрөө болон ухаалаг климат систем нь ажлын өдрийн дараа бүрэн амрахад чиглэгдсэн. 24 цагийн room service болон minibar нь таны цагийг хэмнэнэ.",
      "Орчин үеийн тансаг засал чимэглэл нь таны бизнесийн уур амьсгалыг ч, амралтын шаардлагыг ч нэгэн зэрэг хангасан байдаг — мэргэжлийн болон хувийн шаардлага хоёуланг нь төгс хослуулна."
    ],
    detailEn: [
      "The Executive Room is engineered for the discerning business traveler who refuses to compromise on comfort. A 42㎡ space houses a broad executive desk, ergonomic chair, and ultra-fast Wi-Fi alongside stunning city views.",
      "A king-size bed, marble bathroom, and smart climate control ensure you recover fully after a demanding day. In-room dining via 24-hour room service means you never have to leave your productive flow.",
      "Clean-line executive furnishings blended with warm accent lighting strike the precise balance between professional focus and personal luxury."
    ],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe2e2?w=800&q=80",
    ],
    amenities: [
      "kingSizeBed",
      "cityView",
      "workDesk",
      "wifi",
      "smartTV",
      "miniBar",
      "safe",
      "climateControl",
      "roomService24",
    ],
  },
  {
    id: 5,
    name: "Bishrelt Suite Room",
    subtitle: "King Bed · Panorama View",
    type: "SUITE",
    price: "₮380,000",
    area: 68,
    guests: 3,
    description:
      "Bishrelt Suite нь манай зочид буудлын нэрэмжит тансаг сюит бөгөөд 68м² уужим орон зай, хувийн жакузи, панорама үзэмжтэй. Аяллын хамгийн онцгой туршлага.",
    descriptionEn:
      "The Bishrelt Suite is our signature luxury suite — 68㎡ with a private jacuzzi and panoramic views. The ultimate travel experience.",
    detailMn: [
      "Bishrelt Suite нь манай зочид буудлын нэрэмжит сюит бөгөөд 68м² уужим орон зайд хувийн жакузи, тасдаа зочны болон нойрны өрөөг багтаасан тансаглалын дээд илэрхийлэл юм. Хотын 360° панорама үзэмж нь та хаана ч байсан харагдана.",
      "Жакузи, мармарт угаалгын өрөо, ухаалаг гэрэлтүүлэг болон климат систем, 24 цагийн butler үйлчилгээ нь таны хамгийн ч жижиг хүсэлтийг биелүүлэхэд бэлэн байна. Тусгай minibar болон хоолны цэстэй орлого нь зугаа цэнгэлд зориулагдсан.",
      "Монголын уламжлалт урлагийн мотивийг орчин үеийн дизайнтай хослуулсан Bishrelt Suite нь ердийн зочид буудлын мэдрэмжийг давж, жинхэнэ тансаг орон зайн туршлагыг өгнө."
    ],
    detailEn: [
      "The Bishrelt Suite is our flagship accommodation — a 68㎡ sanctuary encompassing a private jacuzzi, separate living room, and premium sleeping quarters. Floor-to-ceiling panoramic windows deliver a 360-degree view of Ulaanbaatar that must be seen to be believed.",
      "A dedicated butler service anticipates your every need, while the marble bathroom, intelligent lighting, climate control, and curated minibar ensure an effortlessly luxurious stay from the moment you arrive.",
      "Inspired by Mongolian artistic heritage and realized through contemporary craftsmanship, the Bishrelt Suite goes beyond hospitality — it is an experience in itself."
    ],
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&q=80",
    ],
    amenities: [
      "kingSizeBed",
      "panoramaView",
      "privateJacuzzi",
      "wifi",
      "smartTV",
      "miniBar",
      "safe",
      "marbleBathroom",
      "climateControl",
      "roomService24",
      "butlerService",
    ],
  },
  {
    id: 6,
    name: "Presidential Suite",
    subtitle: "King Bed · Panorama View",
    type: "SIGNATURE",
    price: "₮850,000",
    area: 120,
    guests: 4,
    description:
      "Presidential Suite нь 120м² уужим орон зай, хувийн хурлын өрөө, butler үйлчилгээтэй. Хотын оргилоос тансаг байдлын хамгийн дээд хэмжээг амраарай.",
    descriptionEn:
      "The Presidential Suite offers 120㎡ of space, a private meeting room, and butler service. Enjoy the pinnacle of luxury from the city's summit.",
    detailMn: [
      "Presidential Suite нь 120м² уудам орон зайтай, хувийн хурлын өрөө, хувийн гал тогоо, butler үйлчилгээ бүхий Bishrelt Hotel-ийн хамгийн тансаг байрлал юм. Хотын хамгийн өндөр давхарт байрлах энэхүү сюит нь Улаанбаатарын панорама дүр зурааг бүрэн харах боломжийг олгоно.",
      "Хувийн тогооч, дотоод butler үйлчилгээ, гантиг угаалгын өрөо болон хувийн жакузи нь таны бүх хэрэгцээг биелүүлэхэд бэлэн байна. Хурлын өрөо нь тансаг орчинд бизнесийн хурал явуулах боломжийг бүрдүүлнэ.",
      "Монголын болон дэлхийн уламжлалт урлагийн элементүүдийг нэгтгэсэн дотоод засал нь ерөнхийлөгчийн зэрэглэлийн байрлалыг бий болгодог — энэ бол зөвхөн өрөо биш, зочдынхоо амьдрах хамгийн дээд зэрэглэлийн орон зай юм."
    ],
    detailEn: [
      "The Presidential Suite is the crown of Bishrelt Hotel — 120㎡ of uncompromising luxury perched at the city's summit with panoramic views stretching to the horizon. A private meeting room, private kitchen, and personal butler service redefine what a hotel stay can be.",
      "Every amenity is of the highest caliber: a private jacuzzi, his-and-hers marble bathrooms, a home cinema system, and 24-hour dedicated butler service ensure your every desire is met before you voice it.",
      "Curated art pieces from Mongolian and international masters, bespoke furnishings, and hand-selected finishes make the Presidential Suite a space that rivals the world's finest residences."
    ],
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe2e2?w=800&q=80",
    ],
    amenities: [
      "kingSizeBed",
      "panoramaView",
      "privateJacuzzi",
      "wifi",
      "smartTV",
      "privateKitchen",
      "safe",
      "marbleBathroom",
      "climateControl",
      "roomService24",
      "butlerService",
    ],
  },
];
