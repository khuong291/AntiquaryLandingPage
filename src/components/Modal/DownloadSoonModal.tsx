"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "../Icons/CloseIcon";
import Image from "next/image";
import { RootState } from "../../app/store";
import { closeDownloadSoon } from "../../app/store/modalSlice";

const DownloadSoonModal = () => {
  const isOpen = useSelector((state: RootState) => state.modal.downloadSoonOpen);
  const dispatch = useDispatch();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative bg-white rounded-lg p-6 max-w-md w-full mx-4 text-center shadow-2xl">
        <button
          onClick={() => dispatch(closeDownloadSoon())}
          className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-gray-700"
        >
          <CloseIcon className="w-6 h-6 text-primary" />
        </button>

        <Image
          src="/icons/coming-soon.png"
          alt="Download Coming Soon"
          width={150}
          height={150}
          className="mx-auto mb-4"
        />
        <h2 className="text-2xl font-semibold mb-4">Download Coming Soon!</h2>
        <p className="mb-6 text-gray-700">
          We're working hard to bring you the download feature. Stay tuned!
        </p>

        <button className="px-8 py-4 bg-primary text-white rounded-xl hover:opacity-80 transition w-full">
          Download on App Store
        </button>
      </div>
    </div>
  );
};

export default DownloadSoonModal;