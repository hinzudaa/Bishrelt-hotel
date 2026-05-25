export const CATEGORIES = ["ALL", "DELUXE", "SUITE", "SIGNATURE"] as const;
export type Category = (typeof CATEGORIES)[number];

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
  image: string;
};

export const roomsData: Room[] = [
  {
    id: 1,
    name: "Deluxe King Room",
    subtitle: "King Bed · Skyline Window",
    type: "DELUXE",
    price: "₮185,000",
    area: 38,
    guests: 2,
    description:
      "Deluxe King өрөө нь бидний хамгийн их эрэлттэй өрөө юм — 38м² талбайтай, дулаахан, тухтай орон зай бөгөөд тэнгэрийн хаяатай үзэмж, хурзэлгэдэх хэмжээтэй ортой.",
    descriptionEn:
      "Our most in-demand room — 38㎡ of warm, comfortable space with a skyline view and a king-sized bed you'll sink into.",
    image: "/room/image.png",
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
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
  },
];
