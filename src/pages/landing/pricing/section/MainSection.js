import imageMain from "src/assets/image/main.svg";
import imageAbout from "src/assets/image/about.svg";

export function MainSection() {
  return (
    <div
      className="flex justify-center min-h-[700px] relative overflow-hidden"
      id="main"
    >
      <div className="w-11/12 grid grid-cols-12 gap-4 py-20">
        <div className="absolute justify-center items-center">
          <img src={imageMain} alt="main" className="w-1/3" />
        </div>
        <div className="absolute flex justify-end items-center right-0 bottom-0">
          <img src={imageAbout} alt="about" className="w-1/3" />
        </div>
        <div className="relative col-span-12 text-left flex flex-col justify-center items-center">
          <h3 className="text-4xl text-text">Product Price</h3>
          <h1 className="text-6xl font-bold mt-6 text-primary">Toko Kita</h1>

          <p className="text-lg mt-8 text-center">
            You can manage your order and peyment with this application. <br />{" "}
            And you can also manage your product and category.
          </p>
        </div>
      </div>
    </div>
  );
}
