interface SearchBarProps {
  value: string;

  onChange: (
    value: string
  ) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search operational knowledge..."
      value={value}
      onChange={(event) =>
        onChange(event.target.value)
      }
      className="
        w-full
        rounded-lg
        border
        border-slate-300
        px-4
        py-3
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
      "
    />
  );
}