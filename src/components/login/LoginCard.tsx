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
  <div className="relative border-1 rounded-2xl flex gap-x-20 items-center shadow-2xl bg-white
                  flex-col lg:flex-row
                  sm:px-8 md:px-10 lg:px-12
                  sm:py-4 md:py-6 lg:py-8
                  mx-6 lg:mx-auto
                  sm:max-w-xl md:max-w-3xl lg:max-w-4xl
                  gap-y-4 lg:gap-y-0">

    <div className="w-full lg:w-7/12 pt-8 pb-2 px-8 lg:p-0">
      <LoginDescription />
    </div>

    <hr className="w-full lg:w-10/12
                   relative lg:hidden" />
    
    <div className="w-full lg:w-5/12 pb-6 lg:pb-0 px-8 lg:px-0">
      <LoginForm />
    </div>
    
  </div>
  )
}