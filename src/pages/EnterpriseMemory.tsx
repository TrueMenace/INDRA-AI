import PageHeader from "../components/ui/PageHeader";
import MemoryCard from "../components/memory/MemoryCard";
import { useMemory } from "../context/MemoryContext";

export default function EnterpriseMemory() {
  const { records } = useMemory();
  
  return (
    <>
      <PageHeader
        title="Enterprise Memory"
        description="Browse validated operational knowledge available across the organization."
      />

      <div className="space-y-6">
        {records.map(record => (
          <MemoryCard
            key={record.id}
            title={record.title}
            department={record.department}
            tags={record.tags}
            recentlyAdded={record.recentlyAdded}
          />
        ))}
      </div>
    </>
  );
}