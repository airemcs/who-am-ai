import { TextAnimate } from "@/components/magicui/text-animate";
import { AvatarCircles } from "@/components/magicui/avatar-circles";

export default function LoginDescription() {

  // Desktop: 1440px -> 1200px    Margin  = 120px
  // Tablet: 830px                        = 80-56px
  // Mobile: 393px                        = 20-16px

  // H1: 80 -> 64 -> 44
  // H2: 56 -> 56 -> 32
  // H3: 32 -> 32 -> 28
  // H4: 20 -> 20 -> 18

  const avatars = Array.from({ length: 8 }, (_, i) => ({
    imageUrl: `https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_${i + 1}.png`,
    profileUrl: "",
  }))

  return (
  <div className="flex flex-col space-y-3">

    <div className="flex flex-col space-y-2">
      <TextAnimate className="text-4xl font-extrabold" animation="blurInUp" by="character" once>Who Am Ai?</TextAnimate>
      <span className="text-md lg:text-lg lg:text-balance">This is just a mild project I wanted to work on for a while now. It's essentially a simple quiz game about me, just populated with an abundance of unnecessary features.</span>
    </div>

    <AvatarCircles className="flex justify-end" numPeople={12} avatarUrls={avatars} />
  
  </div>
  )
}