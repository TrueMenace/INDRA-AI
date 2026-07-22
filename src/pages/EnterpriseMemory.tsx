import { useState } from "react";

import PageHeader from "../components/ui/PageHeader";
import MemoryCard from "../components/memory/MemoryCard";
import SearchBar from "../components/memory/SearchBar";
import FilterBar from "../components/memory/FilterBar";

import { useMemory } from "../context/MemoryContext";

import MemoryDetailsDrawer from "../components/memory/MemoryDetailsDrawer";
import type { MemoryRecord } from "../context/MemoryContext";

export default function EnterpriseMemory() {
  const { records } = useMemory();

  const [selectedRecord, setSelectedRecord] =
    useState<MemoryRecord | null>(null);

  const [search, setSearch] = useState("");

  const [department, setDepartment] =
    useState("All Departments");

  const [status, setStatus] =
    useState("All Status");

  const departments = [
    ...new Set(
      records.map((record) => record.department)
    ),
  ];

  const filteredRecords = records.filter((record) => {
    const matchesSearch =
      record.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      record.transcript
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      record.tags.some((tag) =>
        tag
          .toLowerCase()
          .includes(search.toLowerCase())
      );

    const matchesDepartment =
      department === "All Departments" ||
      record.department === department;

    const matchesStatus =
      status === "All Status" ||
      (status === "Approved" &&
        record.approved) ||
      (status === "Pending" &&
        !record.approved);

    return (
      matchesSearch &&
      matchesDepartment &&
      matchesStatus
    );
  });

  return (
    <>
      <PageHeader
        title="Enterprise Memory"
        description="Browse validated operational knowledge available across the organization."
      />

      <div className="space-y-6">

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <FilterBar
          departments={departments}
          department={department}
          status={status}
          onDepartmentChange={setDepartment}
          onStatusChange={setStatus}
        />

        <div className="space-y-6">
          {filteredRecords.length === 0 ? (
            <div className="rounded-xl border border-slate-200 bg-white py-20 text-center">
              <h3 className="text-xl font-semibold text-slate-700">
                No matching knowledge found
              </h3>

              <p className="mt-3 text-slate-500">
                Try changing your search keywords or filters.
              </p>
            </div>
          ) : (
            filteredRecords.map((record) => (
              <div
                key={record.id}
                onClick={() => setSelectedRecord(record)}
                className="cursor-pointer"
              >
                <MemoryCard {...record} />
              </div>
            ))
          )}
        </div>

      </div>

      <MemoryDetailsDrawer
        record={selectedRecord}
        onClose={() => setSelectedRecord(null)}
      />
    </>
  );
}