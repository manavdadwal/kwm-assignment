import { ChevronDown } from "lucide-react";
import home_page_hero_section_background from "../../assets/home-page.gif";

export default function HeroSection() {
  return (
    <section className="relative h-screen pt-[83px]">
      <div className="absolute inset-0">
        <img src={home_page_hero_section_background} alt="Tennis Court" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative h-full max-w-[1366px] mx-auto px-[4vw] flex flex-col items-center justify-center text-white">
        <p className="text-[1.5vw] md:text-lg tracking-[0.5em] uppercase font-bold mb-6">SSA Hunter Valley</p>

        <h1 className="text-[4vw] md:text-[50px] font-light text-center leading-tight mb-8">
          Grow Your Game with the<br />
          <span className="font-bold">Professionals</span>
        </h1>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-[10vw] md:w-24 h-px bg-white"></div>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
          <div className="w-[10vw] md:w-24 h-px bg-white"></div>
        </div>

        <p className="text-[1.3vw] md:text-lg tracking-[0.3em] uppercase mb-8">Adopt • Nurture • Deliver</p>

        <button className="px-8 py-3 border-2 border-[#99b81b] rounded-full uppercase hover:bg-[#99b81b] transition">
          Register Now
        </button>

        {/* Weather Widget - Desktop Only */}
        <div className="hidden xl:block absolute right-0 top-1/4 bg-[rgba(210,242,79,0.6)] backdrop-blur-sm p-6 rounded-l-lg">
          <p className="font-bold text-sm mb-2">Hunter Valley</p>
          <div className="flex items-baseline">
            <span className="text-5xl font-bold">19°</span>
            <span className="text-3xl">C</span>
          </div>
          <p className="text-sm mt-2 font-bold">Weather</p>
          <p className="text-xs mt-1">Saturday, 8 pm</p>
        </div>

        <div className="absolute bottom-8">
          <ChevronDown className="w-8 h-8 text-[#d2f24f] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
