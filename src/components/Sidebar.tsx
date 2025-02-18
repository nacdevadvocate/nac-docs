"use client";
import Link from "next/link";
import { apiDocs } from "@/data/apis";
import { useState } from "react";

const Sidebar = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-4">API Docs</h2>
      <ul>
        {apiDocs.map((section) => (
          <li key={section.category} className="mb-2">
            <button
              onClick={() => toggleCategory(section.category)}
              className="w-full text-left p-2 bg-gray-800 rounded hover:bg-gray-700 font-semibold"
            >
              {section.category}
            </button>
            {openCategory === section.category && (
              <ul className="ml-4 mt-2">
                {section.apis.map((api) => (
                  <li key={api.id} className="mb-1">
                    <Link
                      href={`/docs/${api.id}`}
                      className="block p-2 bg-gray-700 rounded hover:bg-gray-600"
                    >
                      {api.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
