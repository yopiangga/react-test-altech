import imageMain from "src/assets/image/main.svg";

export function MainSection() {
  return (
    <div className="flex justify-center min-h-[700px]" id="main">
      <div className="w-11/12 grid grid-cols-12 gap-4 py-20">
        <div className="lg:col-span-4 col-span-12 text-left flex flex-col justify-center">
          <h3 className="text-4xl text-text">Welcome</h3>
          <h1 className="text-6xl font-bold mt-6 text-primary">
            Toko
            <br />
            Kita
          </h1>
          <h2 className="text-5xl mt-8">
            ERP Enterprise
            <br />
            Solution
          </h2>
          <p className="text-lg mt-8">
            You can manage your order and peyment with this application.
          </p>
          <div className="flex gap-2 mt-4">
            <a className="bg-primary text-dark-300 font-[500] px-10 py-3 mt-4 hover:bg-dark-100 hover:text-primary duration-200 rounded-xl">
              Get Started
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 relative lg:flex hidden justify-center items-center">
          <img src={imageMain} alt="profile" />
        </div>
        <div className="lg:col-span-3 col-span-12 lg:mt-0 mt-10 flex items-center justify-center">
          <div className="bg-dark-300 text-left rounded-xl p-6 w-56">
            <div>
              <h4 className="text-4xl text-primary">10+</h4>
              <p className="mt-1">Years of Experience</p>
              <div className="h-[0.5px] bg-white mt-4"></div>
            </div>
            <div className="mt-4">
              <h4 className="text-4xl text-primary">11</h4>
              <p className="mt-1">Company</p>
              <div className="h-[0.5px] bg-white mt-4"></div>
            </div>
            <div className="mt-4">
              <h4 className="text-4xl text-primary">500+</h4>
              <p className="mt-1">Customer</p>
              <div className="h-[0.5px] bg-white mt-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
