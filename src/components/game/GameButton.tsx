interface GameButtonProps {
  variant: "back" | "next";
  onClick?: () => void;
  disabled?: boolean;
  hidden?: boolean;
}

export function GameButton({ variant, onClick, disabled, hidden }: GameButtonProps) {
  const baseClasses =
    "font-semibold w-1/2 self-end p-3 rounded-lg text-center transition-colors duration-250 cursor-pointer";

  const variants = {
    back: `border border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white 
           disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-slate-800`,
    next: `bg-slate-800 text-white hover:bg-black 
           disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-slate-800`,
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${hidden ? "invisible" : ""}`}
    >
      {variant === "back" ? "Back" : "Next"}
    </button>
  );
}
