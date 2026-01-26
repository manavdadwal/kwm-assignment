import imgRectangle12 from "../../assets/Rectangle 12.jpg";
import imgRectangle13 from "../../assets/Rectangle 13.jpg";

export default function ExcellenceSection() {
  return (
    <section className="py-[6vw] md:py-20 bg-gray-50">
      <div className="max-w-[1366px] mx-auto px-[4vw]">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-3 h-3 rounded-full bg-[#99b81b]"></div>
          <h2 className="text-[3vw] md:text-4xl font-bold text-center">A Glimpse of Excellence</h2>
        </div>

        <p className="text-[1.5vw] md:text-lg text-center mb-12 max-w-2xl mx-auto">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>

        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <img src={imgRectangle12} alt="Excellence 1" className="w-full h-96 object-cover rounded-lg" />
          <img src={imgRectangle13} alt="Excellence 2" className="w-full h-96 object-cover rounded-lg" />
        </div>

        <div className="text-center">
          <button className="px-8 py-3 bg-[#99b81b] text-white rounded-full uppercase hover:bg-[#88a719] transition">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
}
