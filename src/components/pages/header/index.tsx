import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [open, setOpen] = useState(false);

  const toggleButton = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-gray-200 shadow-md z-10">
        <div className="w-[90%] m-auto h-[60px] flex items-center justify-between">
          <Link
            to="/user-layout"
            className="font-medium text-gray-600 text-[18px] lg:text-[24px]"
          >
            ANDMI
          </Link>

          <div className="md:hidden">
            <button
              onClick={toggleButton}
              className="text-gray-600 text-[18px] focus:outline-none"
            >
              {open ? <CloseOutlined /> : <MenuOutlined />}
            </button>
          </div>

          <nav
            className={`fixed top-0 left-0 w-[50%] sm:w-[40%] h-full bg-gray-200 shadow-lg transform ${
              open ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out md:static md:transform-none md:flex md:items-center md:gap-8 md:w-auto md:h-auto md:shadow-none`}
          >
            <Link
              to="/user-layout"
              className="font-medium text-gray-600 text-[18px] md:hidden block pt-4 px-8"
            >
              ANDMI
            </Link>
            <ul className="flex flex-col md:flex-row md:items-center md:gap-8 p-5 md:p-0">
              <li>
                <Link
                  to="/user-layout"
                  className="block py-3 px-4 text-gray-600 hover:text-gray-800 hover:bg-gray-300 rounded md:hover:bg-transparent"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-3 px-4 text-gray-600 hover:text-gray-800 hover:bg-gray-300 rounded md:hover:bg-transparent"
                  onClick={() => setOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-3 px-4 text-gray-600 hover:text-gray-800 hover:bg-gray-300 rounded md:hover:bg-transparent"
                  onClick={() => setOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-3 px-4 text-gray-600 hover:text-gray-800 hover:bg-gray-300 rounded md:hover:bg-transparent"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Index;
