"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Instagram, ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeTimeoutRef = useRef(null);
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [showHeaderLogo, setShowHeaderLogo] = useState(false);
//   useEffect(() => {
//   const handleScroll = () => {
//     const currentScrollY = window.scrollY;
//     // Detects scroll UP
//     if (currentScrollY < lastScrollY) {
//       // Scrolling UP → show header AND make it solid black
//       setIsVisible(true);
//       setIsScrolled(false);  // ← This makes it black
//     }
//     // Detects scroll DOWN
//     else if (currentScrollY > lastScrollY) {
//       // Scrolling DOWN
//       if (currentScrollY > 10) {
//         setIsScrolled(true);  // Make transparent
//       }
//       if (currentScrollY > 5) {
//         setIsVisible(false);  // Hide header
//       }
//     }
    
//     // At very top, always black
//     if (currentScrollY < 5) {
//       setIsScrolled(false);
//     }
    
//     setLastScrollY(currentScrollY);
//   };
  
//   window.addEventListener("scroll", handleScroll, { passive: true });
//   return () => window.removeEventListener("scroll", handleScroll);
// }, [lastScrollY]);
useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY < lastScrollY) {
      // Scrolling UP → show header
      setIsScrolled(false);
    } else if (currentScrollY > lastScrollY) {
      // Scrolling DOWN
      if (currentScrollY > 5) {
        setIsScrolled(true);  // Fade to 50%
      }
    }
    
    // At very top, always fully visible
    if (currentScrollY < 5) {
      setIsScrolled(false);
    }
    
    // Logo visibility (homepage only): show after scrolling 120px
    // Adjustable range: 80-200px works well depending on hero logo position
    if (isHomepage) {
      setShowHeaderLogo(currentScrollY > 185);
    }
    
    setLastScrollY(currentScrollY);
  };
  
  // On non-homepage, always show logo
  // if (!isHomepage) {
  //   setShowHeaderLogo(true);
  // }
  
  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY, isHomepage]);
// Reset logo visibility when navigating to homepage
useEffect(() => {
  if (isHomepage) {
    const currentScrollY = window.scrollY;
    // Hide logo if at top of page (below threshold)
    setShowHeaderLogo(currentScrollY > 185);
  } else {
    // Always show on other pages
    setShowHeaderLogo(true);
  }
}, [pathname, isHomepage]);
  // Dropdown data
  const destinations = [
    { name: "Bishkek", href: "/destinations/bishkek" },
    { name: "Issyk-Kul Lake", href: "/destinations/issyk-kul-lake" },
    { name: "Chong-Kemin", href: "/destinations/chong-kemin" },
    { name: "Naryn", href: "/destinations/naryn" },
    { name: "At-Bashy", href: "/destinations/at-bashy" },
    { name: "Arslanbob", href: "/destinations/arslanbob" },
    { name: "Jalal-Abad", href: "/destinations/jalal-abad" },
    { name: "Osh & Fergana Valley", href: "/destinations/osh-fergana-valley" },
    { name: "Suusamyr", href: "/destinations/suusamyr" },
  ];

  const itineraries = [
    { name: "Classic Kyrgyzstan", href: "/tours/classic-kyrgyzstan" },
    { name: "Nomads of Tien Shan", href: "/tours/nomads-tien-shan" },
    { name: "Treasures of Tien Shan", href: "/tours/treasures-tien-shan" },
    { name: "Golden Circle", href: "/tours/golden-circle" },
    { name: "Where Tien Shan Meets Pamir", href: "/tours/tien-shan-meets-pamir" },
  ];
  
  const top10Places = [
    { name: "Issyk-Kul Lake", href: "/top-10-places/issyk-kul-lake" },
    { name: "Ala-Archa National Park", href: "/top-10-places/ala-archa" },
    { name: "Song-Kul Lake", href: "/top-10-places/song-kul-lake" },
    { name: "Kel-Suu Lake", href: "/top-10-places/kel-suu-lake" },
    { name: "Sary-Chelek Lake", href: "/top-10-places/sary-chelek" },
    { name: "Karakol and its surroundings", href: "/top-10-places/karakol-and-its-surroundings" },
    { name: "Jeti-Oguz Rocks", href: "/top-10-places/jeti-oguz" },
    { name: "Tash Rabat", href: "/top-10-places/tash-rabat" },
    { name: "Arslanbob", href: "/top-10-places/arslanbob" },
    { name: "Skazka Canyon", href: "/top-10-places/skazka-canyon" },
  ];

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Itineraries", href: "/tours", dropdown: itineraries },
    { name: "Destinations", href: "/destinations", dropdown: destinations },
    { name: "About us", href: "/about" },
    // { name: "Reviews", href: "/reviews" },
    { name: "Souvenirs", href: "/souvenirs" },
    { name: "Top 10 Places", href: "/top-10-places", dropdown: top10Places },
    { name: "Kyrgyz Foods", href: "/kyrgyz-foods" },
    { name: "Best Time", href: "/best-time" },
    { name: "Books", href: "/books" },
    { name: "Contact", href: "/contact" },
  ];

  const handleMouseEnter = (name) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const NavItem = ({ item }) => {
    if (item.dropdown) {
      return (
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter(item.name)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            href={item.href}
            className="flex items-center gap-1 hover:text-blue-400 hover:underline underline-offset-4 transition-colors whitespace-nowrap py-2"
          >
            {item.name}
            <ChevronDown className="w-3 h-3" />
          </Link>
          {openDropdown === item.name && (
            <div 
              className="absolute top-full left-0 pt-1 z-50"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bg-black/95 border border-gray-700 rounded-md shadow-xl min-w-[200px] py-2">
                {item.dropdown.map((subItem) => (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    className="block px-4 py-2 text-sm hover:bg-gray-800 hover:text-blue-400 transition-colors"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }
    return (
      <Link href={item.href} className="hover:text-blue-400 hover:underline underline-offset-4 transition-colors whitespace-nowrap">
        {item.name}
      </Link>
    );
  };

  return (
    <header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 hover:opacity-100 hover:bg-black ${
    isScrolled 
      ? "bg-transparent opacity-50" 
      : "bg-black shadow-lg opacity-100"
  }`}
>
    {/* // <header */}
    {/* //   className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${ */}
    {/* //     isScrolled 
    //       ? "bg-transparent" 
    //       : "bg-black shadow-lg"
    //   } ${ */}
    {/* //     isVisible  
    //       ? "translate-y-0" 
    //       : "-translate-y-full"
    //   }`}
    // > */}
      {/* Top Bar */}
      <div className={`block md:block border-b transition-colors duration-300 ${
        isScrolled ? "border-transparent" : "border-gray-800"
      } py-1`}>
        <div className="w-full px-4 md:px-10">
          
          <div className="flex justify-between items-center">
            <Link 
  href="/" 
  className={`flex items-center justify-start flex-shrink-0 transition-opacity duration-300 ${
    showHeaderLogo ? "opacity-100" : "opacity-0 pointer-events-none"
  }`}
>
  <Image
    src="/images/logo/logo_only.png"
    alt="Tien Shan Journeys"
    width={100}
    height={33}
    className="md:w-[130px] md:h-[43px]"
    priority
  />
</Link>
            <div className="flex items-center gap-6">
              <div className="flex items-start gap-2 text-sm text-white">
                <a href="#" className="hover:text-blue-400 transition-colors">English</a>
                <span className={isScrolled ? "text-white/50" : "text-gray-400"}>|</span>
                <a href="#" className="hover:text-blue-400 transition-colors">Русский</a>
              </div>
              
              <div className="flex items-center gap-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <div className="w-6 h-6 bg-[#3b5998] rounded flex items-center justify-center">
                    <span className="text-white text-sm font-bold">f</span>
                  </div>
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <div className="w-6 h-6 bg-[#bd081c] rounded flex items-center justify-center">
                    <span className="text-white text-sm font-bold">P</span>
                  </div>
                </a>
                <a href="https://www.instagram.com/tienshanjourneys/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <div className="w-6 h-6 rounded flex items-center justify-center" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>
                    <Instagram className="w-3 h-3 text-white" />
                  </div>
                  
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="py-0">
        <div className="w-full px-4 md:px-6">
          <div className="flex items-center justify-end">
            {/* <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/images/logo/logo_only.png"
                alt="Tien Shan Journeys"
                width={100}
                height={33}
                className="md:w-[130px] md:h-[43px]"
                priority
              />
            </Link> */}

            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-5 text-[13px] text-white">
              {navItems.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
              <button className="hover:text-blue-400 transition-colors" aria-label="Search">
                <Search className="w-4 h-4" />
              </button>
            </nav>

            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 border-t border-gray-800 max-h-[70vh] overflow-y-auto">
          <nav className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block text-white hover:text-blue-400 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 space-y-3">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block text-gray-400 hover:text-blue-400 text-sm py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}