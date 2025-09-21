"use client";

import { useRouter } from "@tanstack/react-router";
import React from "react";


interface LinkItem {
  title: string;
  url: string;
}

const newsLinks: LinkItem[] = [
  { title: "‘GST Utsav’ from tomorrow: PM Modi calls it a festival of…", url: "#" },
  { title: "Seva Pakhwada 2025: youth take charge for a drug-free, self…", url: "#" },
  { title: "Trump says ‘bad things’ will happen if Afghanistan does not…", url: "#" },
  { title: "Mithun Manhas set to take charge as next BCCI president", url: "#" },
  { title: "India’s forex reserves cross USD 700 billion, RBI reports third…", url: "#" },
  { title: "India is producing more energy than ever before: Hardeep Puri", url: "#" },
  { title: "From cars to groceries: what gets cheaper under new GST…", url: "#" },
];

const infoLinks: LinkItem[] = [
  { title: "Website of National Centre for Cell Sciences", url: "#" },
  { title: "Central Labour Acts by Ministry of Labour and Employment", url: "#" },
  { title: "Website of Dr Ambedkar Foundation", url: "#" },
  { title: "Website of Directorate of Advertising and Visual Publicity", url: "#" },
  { title: "Micro Small and Medium Enterprises Development Institute of…", url: "#" },
  { title: "Website of National Brain Research Centre", url: "#" },
  { title: "Rules on emergency planning preparedness and response for…", url: "#" },
];

const NewsAndInfo: React.FC = () => {
  const router = useRouter();

  const handleClick = (url: string) => {
    router.navigate({ to : url})
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* News Box */}
      <div className="flex-1 border border-gray-300 rounded-md p-4 shadow-sm">
        <h2 className="font-semibold mb-4">News Highlights</h2>
        <ul className="space-y-2">
          {newsLinks.map((item, idx) => (
            <li
              key={idx}
              className="cursor-pointer text-blue-600 hover:underline"
              onClick={() => handleClick(item.url)}
            >
              {item.title}
            </li>
          ))}
        </ul>
        <div className="mt-3 text-right">
          <button
            className="text-sm text-gray-600 hover:underline"
            onClick={()=>handleClick('#')}
          >
            more news...
          </button>
        </div>
      </div>

      {/* Information Box */}
      <div className="flex-1 border border-gray-300 rounded-md p-4 shadow-sm">
        <h2 className="font-semibold mb-4">Most Requested Information & Forms</h2>
        <ul className="space-y-2">
          {infoLinks.map((item, idx) => (
            <li
              key={idx}
              className="cursor-pointer text-blue-600 hover:underline"
              onClick={() => handleClick(item.url)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsAndInfo;
