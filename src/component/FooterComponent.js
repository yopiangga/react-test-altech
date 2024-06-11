import { FaArrowUp } from "react-icons/fa";

export function FooterComponent() {
  return (
    <div className="flex justify-center h-20" id="footer-component">
      <div className="w-11/12 flex justify-between items-center">
        <div>
          <p>
            &copy; 2024 <span className="text-primary">Toko Kita</span>. All
            rights reserved.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => {
              document
                .getElementById("main")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="p-4 bg-primary rounded-lg text-dark-100"
          >
            <FaArrowUp />
          </button>
        </div>

        <div className="lg:flex hidden gap-8">
          <li className="list-none hover:text-primary">
            <a
              href="https://www.linkedin.com/in/alfian-prisma-yopiangga"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li className="list-none hover:text-primary">
            <a href="https://github.com/yopiangga/" target="_blank">
              Github
            </a>
          </li>
          <li className="list-none hover:text-primary">
            <a href="https://www.instagram.com/alfian_py/" target="_blank">
              Instagram
            </a>
          </li>
          <li className="list-none hover:text-primary">
            <a href="https://wa.me/6281977394606" target="_blank">
              WhatsApp
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}
