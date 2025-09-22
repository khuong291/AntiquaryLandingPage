import Image from "next/image";
import React from "react";
import { Gabarito } from "next/font/google";
import DownloadButtonGroup from "../DownloadButtonGroup";

const gabarito = Gabarito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gabarito",
});

const IntroSection = () => {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        {/* Background pattern */}


        {/* Gradient blur top-left */}
        <div
          aria-hidden="true"
          className="absolute top-10 left-[calc(50%-4rem)] z-0 transform-gpu blur-3xl
                 sm:left-[calc(50%-18rem)]
                 lg:top-[calc(50%-30rem)] lg:left-48
                 xl:left-[calc(50%-24rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
            className="aspect-[1108/632] w-[277px] bg-gradient-to-r from-green-50 to-green-500 opacity-25"
          />
        </div>

        {/* Main content */}
        <div className="relative isolate md:pt-14 pt-20">
          <div className="relative md:h-screen flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center md:gap-12 gap-4">
                <div className="flex-1 w-full md:w-1/2 animateLeftToRight">
                  <div className="border w-fit md:px-3 md:py-2 px-6 py-2 rounded-full mb-4 flex justify-center items-center md:gap-2 gap-8">
                    <div className="flex justify-center items-center -space-x-2">
                     
                      <Image
                        src="/users/Michael.jpg"
                        alt="Michael"
                        width={40}
                        height={40}
                        className="rounded-full border-2 border-white"
                      />
                       <Image
                        src="/users/Emma.jpg"
                        alt="Emma"
                        width={40}
                        height={40}
                        className="rounded-full border-2 border-white"
                      />
                      <Image
                        src="/users/hani.png"
                        alt="Hani"
                        width={40}
                        height={40}
                        className="rounded-full border-2 border-white"
                      />
                    </div>
                    <p className="text-sm font-semibold">
                      Trusted by over 100k+ users with ⭐ 4.8 rating
                    </p>
                  </div>
                  <h1
                    className={`text-5xl md:text-6xl font-bold mb-6 leading-[1.1] md:leading-[1.2] ${gabarito.className}`}
                  >
                    Identify <span className="text-yellow-500">Any</span> Antiques
                    <br />
                    with <span className="text-primary">Antiquary</span>
                    {/* Identify <span className="text-yellow-500">antiques</span> and <span className="text-yellow-500">vintage</span> items just a snap,
                    <br />
                    with <span className="text-primary">Antiquary</span> */}
                  </h1>

                  <p className="text-xl text-gray-600 mb-6 tracking-wide">
                    Snap or upload a photo to get instant species identification,
                    rich facts, and safety insights. Check venom risk, compare
                    animals, and build your wildlife knowledge—right on your iPhone.
                  </p>
                
                  <div className="flex flex-col justify-center gap-6 items-center w-fit">
                    <DownloadButtonGroup />
                  </div>
                </div>

                <div className="flex-1 w-full sm:w-1/2 animateRightToLeft">
                  <Image
                    src="/hero-image.png"
                    alt="Antiquary App Preview"
                    width={1920}
                    height={1080}
                    className="rounded-3xl w-full h-auto sm:max-w-[1920px] mx-auto"
                    priority
                    sizes="(max-width: 1920px) 1920px, 100vw"
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Gradient blur bottom-right */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl
                   sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2
                     bg-gradient-to-tr from-green-500 to-green-600 opacity-20
                     sm:left-[calc(50%+36rem)] sm:w-[72rem]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroSection;
