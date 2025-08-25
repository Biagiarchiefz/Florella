import { useEffect, useState } from "react";
import { Flower, Menu, Search, ShoppingBasket, X } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)


  const navLinks = [
    {
      name: "Catalog",
      path: "/"
    },
     {
      name: "Payment",
      path: "/"
    },
     {
      name: "Reviems",
      path: "/"
    },
     {
      name: "Contacts",
      path: "/"
    },
     {
      name: "Company",
      path: "/"
    },
  ]

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

            {/*       Logo        */}
            <div className="flex-shrink-0">
              {/* <span className="text-xl font-bold text-gray-800">Logo</span> */}
              <h1 className="flex items-center text-2xl font-bold text-[#B1B1B]">fl<span className="text-[5px]"><Flower/></span>rella</h1>
            </div>

            {/*     Dektop Nav      */}
            <div className="hidden md:flex space-x-4">
              {
             navLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-[#1B1B1B] hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/*          Dekstop Right           */}
            <div className="hidden md:flex gap-5 " style={ 
              { color: isVisible ? "#1B1B1B" : "white"}
            }>
              <Search />
              <ShoppingBasket />
            </div>


            {/*     Mobile menu nav before click   */}
            <div className="md:hidden flex gap-4" style={ 
              { color: isVisible ? "#1B1B1B" : "white"}
            }>
                 <Search />
              <ShoppingBasket />
              <button onClick={() => setIsMenuOpen(true)}>
              <Menu/>
              </button>
            </div>

            {/*    after burger menu click   */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
              <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                <X size={35}/>
              </button>

               {
             navLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className=""
                >
                  {item.name}
                </Link>
              ))}

            </div>



          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
