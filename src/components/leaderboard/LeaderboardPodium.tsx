type LeaderboardCardProps = {
  name: string;
  role: string;
  score: string;
  date: string;
  image: string;
  rank: 1 | 2 | 3;
};

export default function LeaderboardPodium({ name, role, score, date, image, rank}: LeaderboardCardProps) {

  const styleMap = {
    1: {
      border: "border-orange-200",
      bg: "bg-orange-50",
      circle: "bg-orange-400",
      text: "text-orange-400",
    },
    2: {
      border: "border-blue-200",
      bg: "bg-blue-50",
      circle: "bg-blue-400",
      text: "text-blue-400",
    },
    3: {
      border: "border-green-200",
      bg: "bg-green-50",
      circle: "bg-green-400",
      text: "text-green-400",
    },
  } as const;

  const { border, bg, circle, text } = styleMap[rank];
  const isTop1 = rank === 1;
  const cardPaddingTop = isTop1 ? "pt-28 lg:pt-22" : "pt-30";
  const emojiSize = isTop1 ? "text-3xl lg:text-5xl" : "text-3xl";
  const gapY = isTop1 ? "gap-y-4 lg:gap-y-6" : "gap-y-2";
  const profileSize = isTop1 ? "size-20 lg:size-28" : "size-18 lg:size-24";
  const crownOffset = isTop1 ? "-top-22 lg:-top-29" : "-top-20";
  const profileOffset = isTop1 ? "-top-12 lg:-top-14" : "-top-10";

  return (
  <div className="flex justify-center items-center cursor-default">
  <div className={cardPaddingTop}>
  <div className={`relative flex flex-col items-center max-w-[7.2rem] lg:max-w-[14rem] w-[14rem] pt-1 lg:pt-10 pb-4 lg:pb-8 rounded-2xl shadow-xl ${bg} border-[0.15rem] ${border}`} >
    {isTop1 && <div className={`absolute select-none ${crownOffset} ${emojiSize}`}>👑</div>}

    <div className={`absolute ${profileOffset}`}>
      <div className={`relative ${profileSize} rounded-full ${circle} p-[0.3rem]`} >
        <img src={image} alt={name} className="w-full h-full rounded-full object-cover border-white select-none" />
        <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 rotate-45 ${circle} size-6 flex items-center justify-center rounded-sm select-none`} >
          <span className="text-white text-xs font-bold -rotate-45">{rank}</span>
        </div>
      </div>
    </div>

    <div className={`flex flex-col items-center ${gapY} mt-12 font-inter`}>
      <div className="flex flex-col items-center tracking-wider">
        <span className="text-md lg:text-2xl font-inter-semibold truncate w-full text-center">{name}</span>
        <span className="text-sm lg:text-lg font-inter-medium text-gray-500 truncate w-full text-center">{role}</span>
      </div>

      <span className={`text-xl lg:text-3xl font-inter-semibold ${text} tracking-wide`}>{score}</span>
      <span className="hidden lg:flex text-xs lg:text-lg font-inter text-gray-400 tracking-wide">{date}</span>
    </div>
  </div>
  </div>
  </div>
  );
}
