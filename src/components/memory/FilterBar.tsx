interface FilterBarProps {
  departments: string[];

  department: string;

  status: string;

  onDepartmentChange: (
    value: string
  ) => void;

  onStatusChange: (
    value: string
  ) => void;
}

export default function FilterBar({
  departments,
  department,
  status,
  onDepartmentChange,
  onStatusChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <select
        value={department}
        onChange={(event) =>
          onDepartmentChange(event.target.value)
        }
        className="
          rounded-lg
          border
          border-slate-300
          px-4
          py-3
          bg-white
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      >
        <option>All Departments</option>

        {departments.map((dept) => (
          <option key={dept}>
            {dept}
          </option>
        ))}
      </select>

      <select
        value={status}
        onChange={(event) =>
          onStatusChange(event.target.value)
        }
        className="
          rounded-lg
          border
          border-slate-300
          px-4
          py-3
          bg-white
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      >
        <option>All Status</option>
        <option>Approved</option>
        <option>Pending</option>
      </select>
    </div>
  );
}