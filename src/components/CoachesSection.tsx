import imgImage7 from "../../assets/image 3.jpg";
import imgImage8 from "../../assets/image 5.png";
import imgImage9 from "../../assets/image 6.png";

export default function CoachesSection() {
  return (
    <section id="coaches" className="py-[6vw] md:py-20 bg-white">
      <div className="max-w-[1366px] mx-auto px-[4vw]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 rounded-full bg-[#99b81b]"></div>
          <h2 className="text-[3vw] md:text-4xl font-bold">Meet our professionals</h2>
        </div>

        <p className="text-[1.5vw] md:text-lg mb-12 max-w-2xl">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { img: imgImage7, name: "Coach Name 1", role: "Head Coach" },
            { img: imgImage8, name: "Coach Name 2", role: "Tennis Pro" },
            { img: imgImage9, name: "Coach Name 3", role: "Performance Coach" }
          ].map((coach, i) => (
            <div key={i} className="text-center">
              <div className="rounded-xl overflow-hidden mb-4">
                <img src={coach.img} alt={coach.name} className="w-full h-80 object-cover" />
              </div>
              <h3 className="text-[1.5vw] md:text-xl font-semibold mb-1">{coach.name}</h3>
              <p className="text-[1vw] md:text-base text-gray-600">{coach.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
