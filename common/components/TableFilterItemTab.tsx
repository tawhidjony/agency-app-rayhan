"use client";
import { cn } from "@/uikit";
import { useState } from "react";
type TableFilterItemProps = {
  tabs: { name: string; count: number }[];
};
export function TableFilterItemTab({ tabs }: TableFilterItemProps) {
  const [activeTab, setActiveTab] = useState("All");
  return (
    <div className="flex space-x-4 font-semibold text-gray-500 my-6">
      {tabs.map((tab, index) => (
        <div key={tab.name} className="flex items-center space-x-4">
          <button
            key={tab?.name}
            onClick={() => setActiveTab(tab?.name)}
            className={cn(
              "flex items-center space-x-1 transition-colors duration-150 cursor-pointer",
              activeTab === tab?.name
                ? "text-black font-semibold"
                : "text-gray-400 font-semibold"
            )}
          >
            <span>{tab?.name}</span>
            <span>({tab?.count})</span>
          </button>
          {index < tabs.length - 1 && (
            <div className="h-5 w-0.5 bg-gray-300"></div>
          )}
        </div>
      ))}
    </div>
  );
}
