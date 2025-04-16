"use client";

import AppCard from "@/uikit/ui/basic/AppCard";
import DataTable from "@/uikit/ui/basic/DataTable";
import TextButton from "@/uikit/ui/basic/TextButton";

interface EnglishData {
  id: number;
  name: string;
  reading: string;
  listening: string;
  writing: string;
  speaking: string;
  total: string;
}

const EnglishTestScore = () => {
  const columns = [
    { key: "id", label: "ID", hidden: true },
    { key: "name", label: "Course Name" },
    { key: "reading", label: "Reading" },
    { key: "listening", label: "Listening" },
    { key: "writing", label: "Writing" },
    { key: "speaking", label: "Speaking" },
    { key: "total", label: "Total Score", color: "text-blue-500" },
  ] as { key: keyof EnglishData; label: string }[];

  const data: EnglishData[] = [
    {
      id: 1,
      name: "IELTS",
      reading: "6.0",
      listening: "6.0",
      writing: "6.0",
      speaking: "6.0",
      total: "24.0",
    },
    {
      id: 2,
      name: "TOEFL",
      reading: "6.0",
      listening: "6.0",
      writing: "6.0",
      speaking: "6.0",
      total: "24.0",
    },
  ];

  const handleRowClick = (row: EnglishData, index: number) => {
    alert(`Row ${index + 1} clicked! Name: ${row.name}`);
  };

  return (
    <div className="mt-4">
      <AppCard title="English Test Score">
        <DataTable columns={columns} data={data} onRowClick={handleRowClick} />
        <div className="border-t border-gray-200 p-2">
          <TextButton
            className="text-sm cursor-pointer font-semibold"
            text="+ Add Course"
            onClick={() => {}}
          />
        </div>
      </AppCard>
    </div>
  );
};

export default EnglishTestScore;
