import { FaLocationArrow } from "react-icons/fa";

export function ReviewSection() {
  return (
    <div
      className="flex justify-center min-h-[700px] bg-dark-300"
      id="job-position"
    >
      <div className="w-11/12 py-20">
        <div className="text-center">
          <h5 className="">User Review</h5>
          <h2 className="text-5xl font-[500] mt-4">
            <span className="text-primary">What people say</span> about
            <br />
            Toko Kita
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-4 mt-16">
          <Item
            number="5.0"
            title="Alisa Wongso - CEO"
            description="
            Toko Kita is a great company to work with. They provide the best service for us. We are very satisfied with their work."
          />
          <Item
            number="4.9"
            title="Ahsan Firdaus - CTO"
            description="
            Toko Kita is a great company to work with. They provide the best service for us. We are very satisfied with their work."
          />
          <Item
            number="4.9"
            title="Randy - CMO"
            description="Toko Kita is a great company to work with. They provide the best service for us. We are very satisfied with their work."
          />
          <Item
            number="4.8"
            title="Kelly Burn - COO"
            description="Toko Kita is a great company to work with. They provide the best service for us. We are very satisfied with their work."
          />
          <Item
            number="4.7"
            title="Nelson - CTO"
            description="Toko Kita is a great company to work with. They provide the best service for us. We are very satisfied with their work."
          />
          <Item
            number="4.7"
            title="Mandela - CTO"
            description="Toko Kita is a great company to work with. They provide the best service for us. We are very satisfied with their work."
          />
        </div>
      </div>
    </div>
  );
}

function Item({ number, title, description }) {
  return (
    <div className="bg-dark-100 p-8 flex gap-4 lg:col-span-6 col-span-12 rounded-xl justify-between">
      <div>
        <h3 className="text-2xl">{number}</h3>
      </div>
      <div className="text-left grow">
        <h3 className="text-2xl font-[500]">{title}</h3>
        <p className="mt-2">{description}</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="rounded-full p-4 bg-dark-300 flex justify-center items-center hover:text-primary">
          <FaLocationArrow size={14} />
        </div>
      </div>
    </div>
  );
}
