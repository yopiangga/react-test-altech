import { FaLocationArrow } from "react-icons/fa";
import imageLogo from "src/assets/image/logo.png";

export function ExperienceSection() {
  return (
    <div
      className="flex justify-center min-h-[700px] bg-dark-300"
      id="experience"
    >
      <div className="w-11/12 grid grid-cols-12 gap-4 py-20">
        <div className="lg:col-span-3 lg:flex hidden items-center justify-center">
          <div className="w-56 h-56 bg-dark-100 rounded-full flex justify-center items-center">
            <img src={imageLogo} alt="Experience" />
          </div>
        </div>
        <div className="lg:col-span-9 col-span-12">
          <div className="text-left">
            <h5 className="">My Experiences</h5>
            <h2 className="text-5xl font-[500] mt-4">
              Real <span className="text-primary">Problem Solution</span> on
              <br />
              Work and Organization
            </h2>
          </div>

          <div className="mt-16 bg-dark-100 rounded-3xl grid grid-cols-9 text-left p-6">
            <div className="lg:col-span-4 col-span-9">
              <Item
                title="Machine Learning Cohort"
                company="Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka · Full-time"
                time="Aug 2023 - Jan 2024 · 6 mos"
              />
              <Item
                title="Software Engineer"
                company="Dismore · Full-time"
                time="Aug 2023 - Dec 2023 · 5 mos"
              />
              <Item
                title="Software Engineer Front End"
                company="NexMed Indonesia · Full-time"
                time="Dec 2022 - Aug 2023 · 9 mos"
              />
              <Item
                title="Mobile Developer"
                company="Maulidan Games · Contract"
                time="Feb 2022 - Apr 2023 · 1 yr 3 mos"
              />
            </div>
            <div className="lg:col-span-1 lg:flex hidden justify-center items-center py-10">
              <div className="h-full w-0.5 bg-accent"></div>
            </div>
            <div className="lg:col-span-4 col-span-9">
              <Item
                title="Ministry of Achievement, Innovation and Technology"
                company="Badan Eksekutif Mahasiswa PENS (BEM PENS) · Seasonal"
                time="Sep 2022 - Aug 2023 · 1 yr"
              />
              <Item
                title="Front End Developer"
                company="Zaycare ltd · Full-time"
                time="Dec 2019 - Aug 2021 · 1 yr 9 mos"
              />
              <Item
                title="Front End Developer"
                company="Campuspedia · Internship"
                time="Jun 2020 - Sep 2020 · 4 mos"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item({ title, company, time }) {
  return (
    <div className="p-6 flex gap-4">
      <div>
        <div className="rounded-full p-4 bg-dark-300 flex justify-center items-center hover:text-primary">
          <FaLocationArrow size={14} />
        </div>
      </div>
      <div>
        <h5>{time}</h5>
        <h3 className="text-2xl font-[500] mt-4">{title}</h3>
        <p className="mt-2">{company}</p>
      </div>
    </div>
  );
}
