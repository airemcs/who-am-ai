interface OptionsListProps {
  options: string[];
  selected: string | null;
  onSelect: (option: string) => void;
  name: string;
}

export function GameOption({ options, selected, onSelect, name }: OptionsListProps) {
  return (
  <div className="flex flex-col gap-y-4 w-full">
    {options.map((option) => (
      <label key={option} className={`flex items-center p-3 border rounded-lg cursor-pointer transition
        ${
          selected === option
            ? "border-blue-500 bg-blue-50"
            : "border-slate-300 hover:border-slate-300"
        }`}>
        <input type="radio" name={name} value={option} checked={selected === option} onChange={() => onSelect(option)} className="mr-3 accent-slate-500" />
        {option}
      </label>
    ))}
  </div>
  );
}
