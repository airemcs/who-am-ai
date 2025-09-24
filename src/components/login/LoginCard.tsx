import LoginDescription from "./LoginDescription";
import LoginForm from "./LoginForm";

// Desktop: 1440px -> 1200px    Margin  = 120px
// Tablet: 830px                        = 80-56px
// Mobile: 393px                        = 20-16px

// H1: 80 -> 64 -> 44
// H2: 56 -> 56 -> 32
// H3: 32 -> 32 -> 28
// H4: 20 -> 20 -> 18

export default function LoginCard() {
  return (
  <div className="relative w-fit p-12 border-1 rounded-2xl flex max-w-1/2 gap-x-20 items-center shadow-2xl bg-white">

    <div className="w-7/12">
      <LoginDescription />
    </div>
    
    <div className="w-5/12">
      <LoginForm />
    </div>
    
  </div>
  )
}