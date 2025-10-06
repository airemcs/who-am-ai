interface QuestionNumberProps {
  current: number;
  total: number;
}

export function GameCounter({ current, total }: QuestionNumberProps) {
  return (
  <span className="text-sm border rounded-xl px-4 py-1 bg-black text-white">
    {current + 1} out of {total}
  </span>
  );
}