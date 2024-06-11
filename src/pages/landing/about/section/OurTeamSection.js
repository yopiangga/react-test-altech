import { FaLocationArrow } from "react-icons/fa";
import imageTeam from "src/assets/image/team.svg";

export function OurTeamSection() {
  return (
    <div
      className="flex justify-center min-h-[700px] bg-dark-300"
      id="experience"
    >
      <div className="w-11/12 grid grid-cols-12 gap-4 py-20">
        <div className="lg:col-span-3 lg:flex hidden items-center justify-center">
          <div className="w-56 h-56 bg-dark-100 rounded-full flex justify-center items-center">
            <img src={imageTeam} alt="Experience" />
          </div>
        </div>
        <div className="lg:col-span-9 col-span-12">
          <div className="text-left">
            <h5 className="">Our Team</h5>
            <h2 className="text-5xl font-[500] mt-4">
              Real <span className="text-primary">Best Team</span> on
              <br />
              Work and Organization
            </h2>
          </div>

          <div className="mt-16 bg-dark-100 rounded-3xl grid grid-cols-9 text-left p-6">
            <div className="lg:col-span-4 col-span-9">
              <Item
                title="Alfian Prisma Yopiangga"
                text="We can develop your needed with the best quality and performance"
                role="CEO & Founder"
              />
              <Item
                title="Zulfikar Nugroho"
                text="We can develop your needed with the best quality and performance"
                role="COO & Co-Founder"
              />
            </div>
            <div className="lg:col-span-1 lg:flex hidden justify-center items-center py-10">
              <div className="h-full w-0.5 bg-accent"></div>
            </div>
            <div className="lg:col-span-4 col-span-9">
              <Item
                title="Zulfikar Ali"
                text="We can develop your needed with the best quality and performance"
                role="CTO & Co-Founder"
              />
              <Item
                title="Zulzabila"
                text="We can develop your needed with the best quality and performance"
                role="CMO & Co-Founder"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item({ title, role, text }) {
  return (
    <div className="p-6 flex gap-4">
      <div>
        <div className="rounded-full p-4 bg-dark-300 flex justify-center items-center hover:text-primary">
          <FaLocationArrow size={14} />
        </div>
      </div>
      <div>
        <h5>{role}</h5>
        <h3 className="text-2xl font-[500] mt-4">{title}</h3>
        <p className="mt-2">{text}</p>
      </div>
    </div>
  );
}
