import { useContext } from "react";
import { useNavigate } from "react-router";
import imageAbout from "src/assets/image/about.svg";
import { PageContext } from "../../../../context/PageContext";

export function AboutSection() {
  const navigate = useNavigate();
  const { page, setPage } = useContext(PageContext);

  return (
    <div className="flex justify-center min-h-[700px]" id="main">
      <div className="w-11/12 grid grid-cols-12 gap-4 py-20">
        <div className="lg:col-span-6 relative lg:flex hidden justify-center items-center">
          <img src={imageAbout} alt="profile" className="lg:w-2/3" />
        </div>

        <div className="lg:col-span-6 col-span-12 text-left flex flex-col justify-center">
          <h3 className="text-2xl text-text">About Us</h3>

          <h2 className="text-5xl mt-8">
            We want provide
            <br />
            Your needs
          </h2>
          <p className="text-lg mt-8">
            Get your needs with us. We provide the best service for you.
          </p>
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => {
                setPage("about");
                navigate("/about");
              }}
              className="bg-primary text-dark-300 font-[500] px-10 py-3 mt-4 hover:bg-dark-100 hover:text-primary duration-200 rounded-xl"
            >
              About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
