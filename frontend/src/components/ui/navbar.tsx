//used https://flowbite.com/docs/components/navbar/ as a starting point

import calcifer from "../../assets/calcifer.png";

function Navbar() {
  return (
    <nav className="sticky top-0 bg-stone-900 text-white shadow-md z-50">
      <div className="max-w-7xl px-8 py-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={calcifer} alt="Logo" className="h-8 w-16" />
          <div className="text-2xl font-bold">Patrick M</div>
        </div>

        {/* Links */}
        <ul className="flex space-x-10 text-xl">
          <li>
            <a href="#home" className="hover:text-gray-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#aboutMe" className="hover:text-gray-400 transition-colors">
              About Me
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-gray-400 transition-colors">
              Education
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;