import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  name: string;
  content: string;
  rating: number;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  content,
  rating,
  image,
}) => {
  const safeRating = Math.max(0, Math.min(5, Math.round(rating)));

  return (
    <article className="group relative h-full" aria-label={`Review by ${name}`}>
      {/* decorative gradient ring */}
      <div className="pointer-events-none absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-blue-200/60 via-indigo-200/60 to-primary/60 blur-[2px] opacity-70 transition-opacity md:group-hover:opacity-100" />

      {/* card */}
      <div
        className="relative flex h-full flex-col rounded-3xl bg-white/80 ring-1 ring-black/5
                      px-4 py-4 sm:px-6 sm:py-4 md:px-4 md:py-4
                      supports-[backdrop-filter]:backdrop-blur-sm md:supports-[backdrop-filter]:backdrop-blur-md"
      >
        {/* quote icon */}
        <div className="mb-3 md:mb-4">
          <svg
            aria-hidden="true"
            className="h-6 w-6 md:h-8 md:w-8 text-primary/30"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V22h8v-8H6.83c.22-2.04 1.22-3.45 3.17-4.17V6H7.17Zm10 0A5.17 5.17 0 0 0 12 11.17V22h8v-8h-3.17c.22-2.04 1.22-3.45 3.17-4.17V6h-2.83Z" />
          </svg>
        </div>

        {/* content */}
        <p className="mb-5 text-base leading-relaxed text-gray-700/90 italic sm:text-[17px] md:text-lg flex-1">
          {content}
        </p>

        {/* footer */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex gap-1 justify-center items-center font-semibold text-gray-900 text-base md:text-lg">
            <Image
              src={`/ratings/${image}`}
              alt={name}
              width={50}
              height={50}
              className="rounded-full border-2 border-white"
            />
            {/* User's name */}
            {name}
          </div>

          {/* rating */}
          <div
            className="flex items-center gap-2"
            role="img"
            aria-label={`${safeRating} out of 5 stars`}
            title={`${safeRating}/5`}
          >
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 md:h-5 md:w-5"
                  viewBox="0 0 64 64"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={
                      i < safeRating ? "text-amber-400" : "text-gray-300"
                    }
                    d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265 
       C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096
       c-1.458,0.223-2.669,1.242-3.138,2.642c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977
       c-0.242,1.488,0.389,2.984,1.62,3.854c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365
       c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72c1.231-0.869,1.861-2.365,1.619-3.854
       l-2.935-17.977l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z"
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
