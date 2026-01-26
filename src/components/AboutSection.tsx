import { useState } from "react";
import imgRectangle45 from "../../assets/Rectangle 45.jpg";
import imgRectangle46 from "../../assets/Rectangle 46.jpg";
import imgRectangle47 from "../../assets/Rectangle 47.jpg";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section id="about" className="py-[6vw] md:py-16 bg-gray-50">
      <div className="max-w-[1366px] mx-auto px-[4vw]">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-[4vw] md:gap-8 mb-12">
          {["about", "coaches", "vision", "mission"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-[2vw] md:text-2xl font-semibold pb-2 capitalize ${activeTab === tab ? "text-black border-b-4 border-[#99b81b]" : "text-gray-400"
                }`}
            >
              {tab === "about" ? "About Us" : tab}
            </button>
          ))}
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#99b81b]"></div>
              <h2 className="text-[3vw] md:text-4xl font-bold">About Us</h2>
            </div>

            <p className="text-[1.5vw] md:text-lg leading-relaxed mb-12">
              To be the first venue in the world to have 60 multi surface courts at one location and establish first one stop tennis academy in the Asia Pacific producing grand slam champions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {[
                { num: "20", label: "courts" },
                { num: "12", label: "coaches" },
                { num: "17", label: "years" },
                { num: "10", label: "clubs" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-[5vw] md:text-5xl font-semibold text-[#99b81b] mb-2">{stat.num}</p>
                  <p className="text-[1.5vw] md:text-lg">{stat.label}</p>
                </div>
              ))}
            </div>

            <button className="px-8 py-3 bg-[#99b81b] text-white rounded-full uppercase hover:bg-[#88a719] transition">
              Read More
            </button>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img src={imgRectangle45} alt="Tennis facility" className="w-full h-48 object-cover rounded col-span-2" />
            <img src={imgRectangle46} alt="Tennis court" className="w-full h-56 object-cover rounded" />
            <img src={imgRectangle47} alt="Tennis player" className="w-full h-56 object-cover rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}
