import imgRectangle21 from "../../assets/Rectangle 21.jpg";
import imgRectangle22 from "../../assets/Rectangle 22.jpg";
import imgRectangle28 from "../../assets/Rectangle 28.jpg";
import imgRectangle29 from "../../assets/Rectangle 29.jpg";

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="py-[6vw] md:py-20 bg-gray-50">
      <div className="max-w-[1366px] mx-auto px-[4vw]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 rounded-full bg-[#99b81b]"></div>
          <h2 className="text-[3vw] md:text-4xl font-bold">Facilities</h2>
        </div>

        <p className="text-[1.5vw] md:text-lg mb-12 max-w-2xl">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {[
            { img: imgRectangle21, title: "Tennis", tags: ["9 Clay Courts", "4 Hard Courts"] },
            { img: imgRectangle22, title: "Accommodation", tags: ["5 Star Hotel"] },
            { img: imgRectangle28, title: "Fitness", tags: ["Gym", "Fitness Room"] },
            { img: imgRectangle29, title: "Recovery", tags: ["Spa", "Pool", "Massage"] }
          ].map((facility, i) => (
            <div key={i} className="relative h-96 rounded-xl overflow-hidden group">
              <img src={facility.img} alt={facility.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <div className="flex gap-2 mb-3 flex-wrap">
                  {facility.tags.map((tag, j) => (
                    <span key={j} className="px-4 py-1 bg-white rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-[2vw] md:text-2xl font-semibold text-white mb-2">{facility.title}</h3>
                <p className="text-sm text-white/90">Lorem Ipsum has been the industry's standard dummy text.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
