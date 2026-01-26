export default function KeyFeaturesSection() {
  return (
    <section className="py-[6vw] md:py-20 bg-white">
      <div className="max-w-[1366px] mx-auto px-[4vw]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 rounded-full bg-[#99b81b]"></div>
          <h2 className="text-[3vw] md:text-4xl font-bold">Key Features</h2>
        </div>

        <p className="text-[1.5vw] md:text-lg mb-12 max-w-2xl">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {[
            "First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium",
            "First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location",
            "First tennis academy in the world to have capabilities to stage WTA & ATP events too",
            "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium; 5 Star Hunter Valley resort and airport all in 500 meters radius",
            "First one stop tennis academy in Asia Pacific"
          ].map((feature, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#99b81b] flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-[1.2vw] md:text-base">{feature}</span>
            </div>
          ))}
        </div>

        <button className="px-8 py-3 bg-[#99b81b] text-white rounded-full uppercase hover:bg-[#88a719] transition">
          Register Now
        </button>
      </div>
    </section>
  );
}
