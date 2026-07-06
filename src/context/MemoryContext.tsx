import { createContext, useContext, useState } from "react";

export interface MemoryRecord {
  id: number;
  title: string;
  department: string;
  transcript: string;
  tags: string[];
  approved: boolean;
  recentlyAdded?: boolean;
}

interface MemoryContextType {
  records: MemoryRecord[];

  addRecord: (record: MemoryRecord) => void;

  updateRecord: (
    id: number,
    updates: Partial<MemoryRecord>
  ) => void;

  getRecord: (
    id: number
  ) => MemoryRecord | undefined;
}

const MemoryContext = createContext<MemoryContextType | undefined>(
  undefined
);

export function MemoryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [records, setRecords] = useState<MemoryRecord[]>([
    {
      id: 1,
      title: "VPN Failure after Windows Update",
      department: "IT Support",
      transcript:
        "VPN stopped after Windows update due to OpenSSL incompatibility.",
      tags: ["VPN", "Windows", "OpenSSL"],
      approved: true,
      recentlyAdded: true,
    },
  ]);

  function addRecord(record: MemoryRecord) {
    setRecords((previous) => [...previous, record]);
  }

  function updateRecord(
    id: number,
    updates: Partial<MemoryRecord>
  ) {
    setRecords((previous) =>
      previous.map((record) =>
        record.id === id
          ? { ...record, ...updates }
          : record
      )
    );
  }

  function getRecord(id: number) {
    return records.find((record) => record.id === id);
  }

  return (
    <MemoryContext.Provider
      value={{
        records,
        addRecord,
        updateRecord,
        getRecord,
      }}
    >
      {children}
    </MemoryContext.Provider>
  );
}

export function useMemory() {
  const context = useContext(MemoryContext);

  if (!context) {
    throw new Error(
      "useMemory must be used inside MemoryProvider"
    );
  }

  return context;
}