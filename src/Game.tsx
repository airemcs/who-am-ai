import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import GameCard from "./components/game/GameCard";

export default function Game() {
  return (
  <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">

    <AnimatedGridPattern numSquares={50} width={25} height={25} maxOpacity={0.25} duration={5} repeatDelay={1} className="absolute inset-0 skew-y-12 scale-150 opacity-50 [mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]" />

    <GameCard />
    
  </div>
  )
}