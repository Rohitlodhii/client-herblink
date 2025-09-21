import React from "react";
import { useFontSize } from "../../hook/fontsize";
import { useFontSizeContext } from "../context/FontSizeContext";
import { QuickLinks } from "../../lib/quicklink";
import { useTranslation } from "react-i18next";
import { useRouter } from "@tanstack/react-router";

// Map font sizes to Tailwind classes
const FONT_CLASSES: Record<number, string> = {
  12: "text-base",
  14: "text-lg",
  16: "text-2xl", // Tailwind default (16px)
  18: "text-3xl",   // Tailwind default (18px)
  20: "text-4xl",   // Tailwind default (20px)
};

const FONT_CLASSES_SUB: Record<number, string> = {
    12: "text-[12px]",
    14: "text-[14px]",
    16: "text-base", // Tailwind default (16px)
    18: "text-lg",   // Tailwind default (18px)
    20: "text-xl",   // Tailwind default (20px)
  };

const QuickLinksSidebar = () => {
  const { fontSize } = useFontSizeContext();
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className=" flex flex-col gap-2 bg-neutral-100 rounded-sm shadow-sm h-full p-4 w-[30%]">
      <h1 className={`${FONT_CLASSES[fontSize]} underline`}>Quick Links</h1>

      <ul className={`${FONT_CLASSES_SUB[fontSize]} flex flex-col gap-2`}>
        {QuickLinks.map((item)=>(
            <li className="text-blue-700 w-full cursor-pointer hover:text-blue-500" onClick={()=>router.navigate({ to : item.link})} key={item.link}> {`>>  `}{t(`quicklinks.${item.title}`)}</li>
        ))}
      </ul>

    </div>
  );
};

export default QuickLinksSidebar;
