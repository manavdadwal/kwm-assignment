import imgSsaLogo1 from "../../assets/SSA-logo 1.png";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t py-16">
      <div className="max-w-[1366px] mx-auto px-[4vw]">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <img src={imgSsaLogo1} alt="SSA Logo" className="h-20 mb-6" />
            <div className="space-y-2 text-sm">
              <p>30 Wills Hill Road</p>
              <p>Lovedale, NSW</p>
              <p>+91 5642589752</p>
              <p>info@ssagroup.com</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 uppercase">Signature Slam Academy</h3>
            <ul className="space-y-2">
              {["About Us", "Programs", "Coaches", "Amenities"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "")}`} className="text-sm hover:text-[#99b81b]">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 uppercase">Resources</h3>
            <ul className="space-y-2">
              {["Matches", "News", "Blogs", "Events"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-[#99b81b]">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#99b81b] mb-4">Connect with us</h3>
            <div className="flex gap-4">
              {["FB", "IG", "TW", "YT"].map((social) => (
                <a key={social} href="#" className="hover:text-[#99b81b] transition">{social}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2023 All rights reserved www.signatureslamacademy.com</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#99b81b]">Terms and Condition</a>
            <a href="#" className="hover:text-[#99b81b]">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
