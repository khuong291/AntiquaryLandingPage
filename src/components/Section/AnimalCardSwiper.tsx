"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type AnimalItem = {
  hero: string;
  avatar: string;
  name: string;
  family: string;
  aka: string;
  scientific: string;
  safety?: "No-Venomous" | "Caution" | "Venomous";
};

const ANIMALS: AnimalItem[] = [
  {
    hero: "/animals/lion-hero.webp",
    avatar: "/animals/lion.jpg",
    name: "Lion",
    family: "Cats",
    aka: "Northeast african lion, Transvaal lion, Asiatic lion",
    scientific: "Panthera leo",
    safety: "No-Venomous",
  },
  {
    hero: "/animals/king-cobra-hero.webp",
    avatar: "/animals/king-cobra.webp",
    name: "King Cobra",
    family: "Elapidae",
    aka: "Ophiophagus hannah",
    scientific: "Ophiophagus hannah",
    safety: "Venomous",
  },
  {
    hero: "/animals/poison-dart-frog-hero.jpg",
    avatar: "/animals/poison-dart-frog.jpg",
    name: "Poison Dart Frog",
    family: "Dendrobatidae",
    aka: "Blue poison dart frog, Azureus",
    scientific: "Dendrobates tinctorius",
    safety: "Venomous",
  },
];

export default function AnimalCardSwiper() {
  return (
    <div className="mx-auto w-full lg:max-w-md md:max-w-[360px] max-w-[320px] z-0">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3800, disableOnInteraction: false }}
        loop
        className="animal-swiper rounded-[28px] border border-gray-100 bg-white shadow-xl shadow-black/5"
      >
        {ANIMALS.map((a) => (
          <SwiperSlide key={a.name} className="animal-slide">
            <div className="relative h-full flex flex-col">
              {/* Hero */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-[28px]">
                <Image
                  src={a.hero}
                  alt={`${a.name} preview`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content */}
              <div className="px-6 pt-12 pb-5 relative flex-1">
                {/* Avatar overlap */}
                <div className="absolute -top-9 left-5 z-10">
                  <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-white">
                    <Image
                      src={a.avatar}
                      alt={`${a.name} avatar`}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                <div className="mb-1 text-sm text-gray-600">
                  <span className="text-gray-800 font-medium">{a.name}</span>, a species of{" "}
                  <span className="font-semibold text-gray-800">{a.family}</span>
                </div>
                <div className="text-sm text-gray-700">
                  <span className="text-gray-500">Also known as: </span>
                  {a.aka}
                </div>
                <div className="mt-2 text-xs text-gray-400 italic">
                  Scientific name:{" "}
                  <span className="not-italic text-gray-600">{a.scientific}</span>
                </div>

                {/* Meta chips */}
                <div className="mt-4 flex items-center gap-2 text-xs">
                  {/* <span className="rounded-full bg-gray-100 px-2 py-1 text-gray-700">1</span>
                  <span className="rounded-full bg-gray-100 px-2 py-1 text-gray-700">2</span> */}
                  {a.safety && (
                    <span
                      className={`rounded-full px-2 py-1 font-medium ${
                        a.safety === "No-Venomous"
                          ? "bg-emerald-50 text-emerald-700"
                          : a.safety === "Caution"
                          ? "bg-amber-50 text-amber-700"
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      {a.safety}
                    </span>
                  )}
                </div>

                {/* Divider + Description stub */}
                <div className="mt-4 h-px w-full bg-gray-100" />
                <button
                  type="button"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-emerald-600 transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="opacity-80"
                  >
                    <path
                      d="M3 6h18M3 12h12M3 18h18"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>Description</span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}