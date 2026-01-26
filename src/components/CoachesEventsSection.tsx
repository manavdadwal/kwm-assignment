export default function CoachesEventsSection() {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="bg-gradient-to-br from-[#002f50] to-[#99b81b] py-24 px-[6vw]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 rounded-full bg-white"></div>
          <h2 className="text-[3vw] md:text-4xl font-bold text-white">Our Coaches</h2>
        </div>
        <p className="text-[1.2vw] md:text-lg text-white/90 mb-8">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
        <a href="#coaches" className="text-white uppercase flex items-center gap-2 hover:gap-4 transition-all">
          Read More →
        </a>
      </div>

      <div className="bg-[#99b81b] py-24 px-[6vw]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 rounded-full bg-white"></div>
          <h2 className="text-[3vw] md:text-4xl font-bold text-white">Events</h2>
        </div>
        <p className="text-[1.2vw] md:text-lg text-white/90 mb-8">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
        <a href="#events" className="text-white uppercase flex items-center gap-2 hover:gap-4 transition-all">
          Read More →
        </a>
      </div>
    </section>
  );
}
