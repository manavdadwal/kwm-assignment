import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-[1366px] mx-auto px-[4vw] h-[83px] flex items-center justify-between">
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-[3vw]">
          <a href="#about" className="text-sm font-medium hover:text-[#99b81b] transition">About Us</a>
          <a href="#coaches" className="text-sm font-medium hover:text-[#99b81b] transition">Coaches</a>
          <a href="#programs" className="text-sm font-medium hover:text-[#99b81b] transition">Programs</a>
          <a href="#facilities" className="text-sm font-medium hover:text-[#99b81b] transition">Facilities</a>
          <a href="#contact" className="text-sm font-medium hover:text-[#99b81b] transition">Contact</a>
        </nav>

        <button className="hidden lg:block px-6 py-2 border-2 border-[#d2f24f] rounded-full text-xs font-bold uppercase hover:bg-[#d2f24f] transition">
          Contact Us
        </button>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden">
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t px-[4vw] py-4 space-y-4">
          <a href="#about" className="block py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>About Us</a>
          <a href="#coaches" className="block py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Coaches</a>
          <a href="#programs" className="block py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Programs</a>
          <a href="#facilities" className="block py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Facilities</a>
          <a href="#contact" className="block py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}
