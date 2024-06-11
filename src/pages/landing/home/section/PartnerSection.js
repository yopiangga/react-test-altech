import imageTailwindcss from "src/assets/image/tailwindcss.png";
import imageReact from "src/assets/image/react.png";
import imageNextjs from "src/assets/image/nextjs.png";
import imageNodejs from "src/assets/image/nodejs.png";
import imageMongoDB from "src/assets/image/mongodb.svg";
import imageTensorflow from "src/assets/image/tensorflow.png";
import imagePython from "src/assets/image/python.png";

export function PartnerSection() {
  return (
    <div
      className="flex justify-center bg-dark-300 min-h-[700px]"
      id="technology"
    >
      <div className="w-11/12 grid grid-cols-12 lg:gap-10 py-20">
        <div className="text-left lg:col-span-4 col-span-12">
          <h5 className="">Our Partners</h5>
          <h2 className="text-5xl font-[500] mt-4">
            Let's Collaborate <br /> With{" "}
            <span className="text-primary">Our Partner</span>
          </h2>
          <p className="mt-6 hidden">
            I have experience in developing applications using the following
            technologies.
          </p>
        </div>
        <div className="lg:col-span-8 col-span-12 lg:mt-0 mt-6">
          <div className="grid grid-cols-12 gap-4">
            <Item title="PT React Inovative" image={imageReact} />
            <Item title="PT Next Soluton" image={imageNextjs} />
            <Item title="PT Wind CSS" image={imageTailwindcss} />
            <Item title="PT Nudes Jago" image={imageNodejs} />
            <Item title="PT Dua Mangga" image={imageMongoDB} />
            <Item title="PT Native Tulus" image={imageReact} />
            <Item title="PT Snake Tunggal" image={imagePython} />
            <Item title="PT Modern Tensor" image={imageTensorflow} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Item({ title, image }) {
  return (
    <div className="p-8 bg-dark-100 rounded-2xl lg:col-span-3 col-span-6">
      <div className="w-full h-28 p-4 flex justify-center items-center">
        <img src={image} className="object-contain h-28" />
      </div>
      <h3 className="text-xl font-[500] mt-6">{title}</h3>
    </div>
  );
}
