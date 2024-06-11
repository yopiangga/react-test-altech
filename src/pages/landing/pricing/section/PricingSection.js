import { FiCheck } from "react-icons/fi";

export function PricingSection() {
  return (
    <div
      className="flex justify-center min-h-[700px] relative overflow-hidden"
      id="main"
    >
      <div className="w-11/12 grid grid-cols-12 gap-4 py-20">
        <div className="relative col-span-12 text-left flex flex-col justify-center items-center">
          <h3 className="text-4xl">Choose your right plan</h3>
          <p className="text-lg mt-8 text-center">
            Select the best plans, ensuring a perfect match. Need more or less?
            <br /> Customize your subscribtion for a seamless fit!
          </p>

          <div className="mt-16 grid lg:grid-cols-3 grid-cols-1 gap-8">
            <Item
              badge="Basic"
              description="Ideal for those who's already got their website up and running and are seeking assistance to enhance and update it further"
              price="$2500"
              list={[
                "Record incoming goods",
                "Record outgoing goods",
                "Record profit results",
              ]}
              button="Get Started"
            />
            <Item
              badge="Business"
              description="Ideal for those who's already got their website up and running and are seeking assistance to enhance and update it further"
              price="$2500"
              list={[
                "Record incoming and outgoing goods",
                "Recording Profits",
                "Can analyze sales results with CHART",
                "Support 7x24 Hours",
              ]}
              button="Get Started"
            />
            <Item
              badge="Entepreneur"
              description="Ideal for those who's already got their website up and running and are seeking assistance to enhance and update it further"
              price="$2500"
              list={[
                "Record incoming and outgoing goods",
                "Recording Profits",
                "Can analyze sales results with CHART",
                "Support 7x24 Hours",
                "Export data to Excel",
                "AI Earning prediction",
              ]}
              button="Get Started"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Item({ badge, description, price, list, button }) {
  return (
    <div className="bg-dark-100 p-10 rounded-xl col-span-1">
      <button className="bg-primary p-2 px-4 rounded-lg text-md">
        {badge}
      </button>
      <p className="text-lg mt-4">{description}</p>
      <h3 className="text-3xl mt-4 text-white font-bold">{price}</h3>
      <div className="w-full h-0.5 bg-gray-600 my-4"></div>
      {list.map((text, i) => {
        return (
          <div className="flex items-center gap-2">
            <FiCheck />
            <h5 className="text-md">{text}</h5>
          </div>
        );
      })}
      <div className="w-full h-0.5 bg-gray-600 my-4"></div>
      <button className="bg-primary text-dark-300 font-[500] w-full px-10 py-3 mt-4 hover:bg-dark-100 hover:text-primary duration-200 rounded-xl">
        Get Started
      </button>
    </div>
  );
}
