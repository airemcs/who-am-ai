import { WordRotate } from "@/components/magicui/word-rotate";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { FaInstagram, FaGithub, FaLinkedin, FaCrown } from "react-icons/fa";

export default function LoginForm() {

  // Desktop: 1440px -> 1200px    Margin  = 120px
  // Tablet: 830px                        = 80-56px
  // Mobile: 393px                        = 20-16px

  // H1: 80 -> 64 -> 44
  // H2: 56 -> 56 -> 32
  // H3: 32 -> 32 -> 28
  // H4: 20 -> 20 -> 18

  const socials = [
    { icon: <FaInstagram className="size-8" />, href: "https://www.instagram.com/airem.iv/" },
    { icon: <FaGithub className="size-8" />, href: "http://github.com/airemcs/" },
    { icon: <FaLinkedin className="size-8" />, href: "https://www.linkedin.com/in/airellemaagma/" },
    { icon: <FaCrown className="size-8" />, href: "http://iam-ai.onrender.com/" },
  ]

  return (
  <div className="flex flex-col gap-y-4">

    <div className="text-3xl font-bold flex items-center gap-x-1">
      <span>Welcome, </span>
      <WordRotate words={["Friend!", "Hooman!", "友達!", "친구!", "朋友!"]} />
    </div>

    <div className="flex flex-col gap-y-6">
      <div className="flex flex-col gap-y-2">
        <label className="text-sm font-medium">Name / Nickname</label>
        <input className="bg-slate-100 text-sm px-4 py-3 rounded-md border focus:border-slate-900" placeholder="Enter Name" type="name" name="name" required></input>
      </div>

      <div className="flex flex-col gap-y-2">
        <label className="text-sm font-medium">Password</label>
        <input className="bg-slate-100 text-sm px-4 py-3 rounded-md border focus:border-slate-900" placeholder="Enter Password" type="password" name="password" required></input>
      </div>

      <ShimmerButton className="shadow-2xl">
        <span className="text-lg font-medium leading-none text-white">Start Quiz!</span>
      </ShimmerButton>

      <div className="flex items-center">
        <hr className="w-full border-slate-300" />
        <p className="text-sm font-medium w-full text-slate-800 text-center">Follow Me!</p>
        <hr className="w-full border-slate-300" />
      </div>

      <div className="flex gap-x-4 justify-center">
        {socials.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-black hover:text-slate-500 transition-colors duration-250">{link.icon}</a>
        ))}
      </div>
    </div>

  </div>
  )
}