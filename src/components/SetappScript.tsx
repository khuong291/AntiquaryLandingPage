import React from "react";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

type Props = {
  referUrl: string;
};

export default function SetappScript({ referUrl }: Props) {
  return (
    <>
      <Script
        src="https://go.setapp.com/stp405"
        data-stp405
        data-stp405-refer-url={referUrl}
        data-stp405-style="height: 64px; object-fit: contain;"
      />
      <div className="use-hover">
        <Link
          target="_blank"
          rel="noreferrer"
          href={referUrl}
          className="hover:scale-110"
        >
          <Image
            src="/ic-setapp.png"
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto h-16 object-contain"
            alt="setapp"
          />
        </Link>
      </div>
    </>
  );
}
