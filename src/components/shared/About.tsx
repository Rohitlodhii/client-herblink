"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { useFontSizeContext } from "../context/FontSizeContext";
import { useRouter } from "@tanstack/react-router";


// Font classes
const FONT_CLASSES: Record<string, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const AboutHerbLink: React.FC = () => {

  const { t } = useTranslation();
  const { fontSize } = useFontSizeContext();
  const router = useRouter();

  const handleNavigation = (route: string) => {
    router.navigate({ to: route });
  };

  return (
    <div className="max-w-6xl mx-auto w-full flex flex-col gap-4 py-4">
      <div className={`${FONT_CLASSES[fontSize]} font-black`}>
        Quick Actions
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
        <div
          onClick={() => handleNavigation('/product/scanqr')}
          className="bg-gray-100 hover:bg-gray-200 cursor-pointer flex flex-col gap-2 items-center justify-center rounded-lg shadow-md transition-colors p-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
            <path d="M7 17l0 .01" />
            <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
            <path d="M7 7l0 .01" />
            <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
            <path d="M17 7l0 .01" />
            <path d="M14 14l3 0" />
            <path d="M20 14l0 .01" />
            <path d="M14 14l0 3" />
            <path d="M14 20l3 0" />
            <path d="M17 17l3 0" />
            <path d="M20 17l0 3" />
          </svg>
          <span className="font-medium">Scan Product QR</span>
        </div>

        <div
          onClick={() => handleNavigation('/chain/livechain')}
          className="bg-gray-100 hover:bg-gray-200 cursor-pointer flex flex-col gap-2 items-center justify-center rounded-lg shadow-md transition-colors p-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" />
            <path d="M9.172 20.485a4 4 0 1 0 -5.657 -5.657" />
            <path d="M14.828 3.515a4 4 0 0 0 5.657 5.657" />
          </svg>
          <span className="font-medium">View LiveChain</span>
        </div>

        <div
         onClick={() => handleNavigation('/product/complaint')}
          className="bg-gray-100 hover:bg-gray-200 cursor-pointer flex flex-col gap-2 items-center justify-center rounded-lg shadow-md transition-colors p-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 16v.01" />
            <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
            <path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
          </svg>
          <span className="font-medium">Raise Complain</span>
        </div>

        <div
         onClick={() => handleNavigation('/working')}
        className="bg-gray-100 hover:bg-gray-200 cursor-pointer flex flex-col gap-2 items-center justify-center rounded-lg shadow-md transition-colors p-4"
      >
       <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12.003 21c-.732 .001 -1.465 -.438 -1.678 -1.317a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c.886 .215 1.325 .957 1.318 1.694" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19.001 15.5v1.5" /><path d="M19.001 21v1.5" /><path d="M22.032 17.25l-1.299 .75" /><path d="M17.27 20l-1.3 .75" /><path d="M15.97 17.25l1.3 .75" /><path d="M20.733 20l1.3 .75" /></svg>
        <span className="font-medium">Working</span>
      </div>
      </div>
    </div>
  );
};

export default AboutHerbLink;