import img27121Converted1 from "../../assets/27121-[Converted] 1.png";

export default function TestimonialSection() {
  return (
    <section className="relative py-24 bg-gradient-to-r from-[#002f50] to-[#99b81b] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src={img27121Converted1} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative max-w-[900px] mx-auto px-[4vw] text-center">
        <blockquote className="text-[2.5vw] md:text-4xl font-semibold text-white leading-relaxed mb-8">
          "We have created an environment ideal for building craft. Our goal is to be recognized as the best tennis performance centre in the world."
        </blockquote>
        <div className="w-full h-px bg-white/30 mb-6"></div>
        <cite className="not-italic">
          <p className="text-[1.5vw] md:text-xl text-white font-medium mb-1">John Doe</p>
          <p className="text-[1vw] md:text-base text-white/80 uppercase">Chairman</p>
        </cite>
      </div>
    </section>
  );
}
