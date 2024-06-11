import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import imageAbout from "src/assets/image/about.svg";
import { PageContext } from "../../../context/PageContext";

export function SignInPge() {
  const navigate = useNavigate();
  const { page, setPage } = useContext(PageContext);

  const [formData, setFormData] = useState({
    email: "yopiangga@email.com",
    passsword: "123456",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setPage("home");
    navigate("/");
  }

  return (
    <div
      className="bg-dark-200 text-white flex justify-center min-h-[700px]"
      id="main"
    >
      <div className="w-11/12 grid grid-cols-12 gap-4 py-20">
        <div className="lg:col-span-6 relative lg:flex hidden justify-center items-center">
          <img src={imageAbout} alt="profile" className="lg:w-2/3" />
        </div>

        <div className="lg:col-span-6 col-span-12 text-left flex flex-col justify-center">
          <h3 className="text-2xl text-text">Welcome</h3>

          <h2 className="text-5xl mt-8">Sign In</h2>
          <p className="text-lg mt-8">
            Get your needs with us. We provide the best service for you.
          </p>
          <div className="flex gap-2 mt-6 ">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex flex-col gap-3 w-full">
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={formData.email}
                  className="text-lg bg-transparent outline-none border border-white focus:border-primary rounded-lg p-3 px-4 w-full lg:w-2/3"
                  required
                />
              </div>
              <div className="flex flex-col gap-3 w-full mt-4">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  onChange={handleChange}
                  value={formData.passsword}
                  className="text-lg bg-transparent outline-none border border-white focus:border-primary rounded-lg p-3 px-4 w-full lg:w-2/3"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-dark-300 font-[500] px-10 py-3 mt-8 hover:bg-dark-100 hover:text-primary duration-200 rounded-xl"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
