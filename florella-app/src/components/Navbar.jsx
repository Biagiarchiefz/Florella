import { useEffect, useState } from "react";
import { Flower, Search, ShoppingBasket } from "lucide-react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100); // Navbar berubah saat scroll > 100px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-center">
      <nav
        className={`fixed w-full top-0 transition-all duration-300 ease-in-out z-50 ${
          isVisible ? "bg-white shadow-lg rounded-2xl top-5" : "bg-transparent"
        }`}
        style={{ 
          width: isVisible ? "80%" : "100%",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              {/* <span className="text-xl font-bold text-gray-800">Logo</span> */}
              <h1 className="flex items-center text-2xl font-bold text-[#B1B1B]">fl<span className="text-[5px]"><Flower/></span>rella</h1>
            </div>

            <div className="flex space-x-4">
              {
              ["Catalog", "Payment", "Reviems", "Contacts", "Company"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[#1B1B1B] hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex gap-5 " style={ 
              { color: isVisible ? "#1B1B1B" : "white"}
            }>
              <Search />
              <ShoppingBasket />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
