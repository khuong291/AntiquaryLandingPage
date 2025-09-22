"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { openDownloadSoon } from "../app/store/modalSlice";

const DownloadButtonGroup = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex items-start justify-start md:gap-6 gap-2">
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            src="/beastid_appstore_qr.png"
            alt="Download on the App Store"
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw, 200px"
            className="max-h-40 w-auto object-contain rounded-lg border"
            priority
          />
          <div>
            <p className="text-sm text-center">Scan QR code to</p>
            <p className="text-sm text-center">download</p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-2 mt-4">
          <Link
            href="https://apps.apple.com/app/id6752285910"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:scale-105 transition-all duration-300"
          >
            <Image
              src="/ic-appstore.webp"
              alt="Download on the App Store"
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, 200px"
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          <button
            className="inline-block hover:scale-105 transition-all duration-300"
            onClick={() => dispatch(openDownloadSoon())}
          >
            <Image
              src="/ic-googleplay.png"
              alt="Download on the Google Play Store"
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, 200px"
              className="h-16 w-auto object-contain"
              priority
            />
          </button>
        </div>

        
      </div>
    </>
  );
};

export default DownloadButtonGroup;
