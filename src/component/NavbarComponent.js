import { useContext, useEffect, useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router";
import { PageContext } from "../context/PageContext";

export function NavbarComponent() {
  const navigate = useNavigate();

  const { page, setPage } = useContext(PageContext);

  const [sectionActive, setSectionActive] = useState("main");
  const [mobileMenu, setMobileMenu] = useState(false);

  const windowScroll = function () {
    if (window.scrollY > 0) {
      document.getElementById("navbar-component").classList.add("bg-dark-200");
    } else {
      document
        .getElementById("navbar-component")
        .classList.remove("bg-dark-200");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", windowScroll);
    return () => {
      window.removeEventListener("scroll", windowScroll);
    };
  }, []);

  return (
    <div
      className="fixed z-10 w-full h-20 flex justify-center"
      id="navbar-component"
    >
      <div className="flex items-center justify-between w-11/12">
        <div className="lg:hidden flex">
          <button
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            <FiMenu />
          </button>

          <div
            className={`rounded-xl border border-white absolute top-16 overflow-hidden w-56 ${
              mobileMenu ? "block" : "hidden"
            }`}
          >
            <ul className="bg-dark-200 p-4 rounded-lg flex flex-col gap-2">
              <button
                className={`list-none py-2 hover:bg-primary hover:text-dark-300`}
                onClick={() => {
                  setPage("home");
                  navigate("/");
                }}
              >
                Home
              </button>

              <button
                className={`list-none py-2 hover:bg-primary hover:text-dark-300`}
                onClick={() => {
                  setPage("about");
                  navigate("/about");
                }}
              >
                About
              </button>

              <button
                className={`list-none py-2 hover:bg-primary hover:text-dark-300`}
                onClick={() => {
                  setPage("pricing");
                  navigate("/pricing");
                }}
              >
                Pricing
              </button>

              <button
                className={`list-none py-2 hover:bg-primary hover:text-dark-300`}
                onClick={() => {
                  setPage("contact");
                  navigate("/contact");
                }}
              >
                Contact
              </button>
              <button
                className={`list-none py-2 hover:bg-primary hover:text-dark-300`}
                onClick={() => {
                  setPage("sign-in");
                  navigate("/sign-in");
                }}
              >
                Sign In
              </button>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="font-bold">
            Toko<span className="text-primary">-Kita</span>
          </h1>
        </div>
        <div className="lg:flex hidden gap-8 outline-none">
          <li
            className={`list-none hover:text-primary ${
              page == "home" ? "text-primary" : "text-white"
            }`}
          >
            <button
              onClick={() => {
                setPage("home");
                navigate("/");
              }}
            >
              Home
            </button>
          </li>
          <li
            className={`list-none hover:text-primary ${
              page == "about" ? "text-primary" : "text-white"
            }`}
          >
            <button
              onClick={() => {
                setPage("about");
                navigate("/about");
              }}
            >
              About
            </button>
          </li>
          <li
            className={`list-none hover:text-primary ${
              page == "pricing" ? "text-primary" : "text-white"
            }`}
          >
            <button
              onClick={() => {
                setPage("pricing");
                navigate("/pricing");
              }}
            >
              Pricing
            </button>
          </li>
          <li
            className={`list-none hover:text-primary ${
              page == "contact" ? "text-primary" : "text-white"
            }`}
          >
            <button
              onClick={() => {
                setPage("contact");
                navigate("/contact");
              }}
            >
              Contact
            </button>
          </li>
          <li
            className={`list-none hover:text-primary ${
              page == "sign-in" ? "text-primary" : "text-white"
            }`}
          >
            <button
              onClick={() => {
                setPage("sign-in");
                navigate("/sign-in");
              }}
            >
              Sign In
            </button>
          </li>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/alfian-prisma-yopiangga"
            target="_blank"
            className="hover:text-primary"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/yopiangga/"
            target="_blank"
            className="hover:text-primary"
          >
            <FaGithub />
          </a>
          {/* <a
            href="https://www.instagram.com/alfian_py/"
            target="_blank"
            className="hover:text-primary"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/6281977394606"
            target="_blank"
            className="hover:text-primary"
          >
            <FaWhatsapp />
          </a> */}
        </div>
      </div>
    </div>
  );
}
