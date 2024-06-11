import { useContext, useState } from "react";
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

  window.onscroll = function () {
    if (window.scrollY > 0) {
      document.getElementById("navbar-component").classList.add("bg-dark-200");
    } else {
      document
        .getElementById("navbar-component")
        .classList.remove("bg-dark-200");
    }
  };

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
                  document
                    .getElementById("main")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Home
              </button>

              <button
                className={`list-none py-2 hover:bg-primary hover:text-dark-300`}
                onClick={() => {
                  document
                    .getElementById("experience")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Experience
              </button>

              <button
                className={`list-none py-2 hover:bg-primary hover:text-dark-300`}
                onClick={() => {
                  document
                    .getElementById("job-position")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Job Position
              </button>

              <button
                className={`list-none py-2 hover:bg-primary hover:text-dark-300`}
                onClick={() => {
                  document
                    .getElementById("technology")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Technology
              </button>
              <button
                className={`list-none py-2 hover:bg-primary hover:text-dark-300`}
                onClick={() => {
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact
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
              sectionActive == "main" ? "text-primary" : "text-white"
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
              sectionActive == "experience" ? "text-primary" : "text-white"
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
              sectionActive == "job-position" ? "text-primary" : "text-white"
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
              sectionActive == "contact" ? "text-primary" : "text-white"
            }`}
          >
            <button onClick={() => {}}>Contact</button>
          </li>
          <li
            className={`list-none hover:text-primary ${
              sectionActive == "contact" ? "text-primary" : "text-white"
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
