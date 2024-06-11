import { useState } from "react";

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    window.open(
      `https://api.whatsapp.com/send?phone=6281977394606&text=Name: ${form.name}%0AEmail: ${form.email}%0ASubject: ${form.subject}%0AMessage: ${form.message}`
    );
  };

  return (
    <div className="flex justify-center" id="contact">
      <div className="w-11/12 grid grid-cols-12 gap-8 py-20">
        <div className="text-left lg:col-span-4 col-span-12">
          <h5 className="">Contact Us</h5>
          <h2 className="text-5xl font-[500] mt-4">
            Let's Talk For <br />
            <span className="text-primary">More Information</span>
          </h2>
          <p className="mt-6">
            We can collaborate with your team to provide the best solution
          </p>
        </div>
        <div className="lg:col-span-8 col-span-12">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <input
                  type="text"
                  className="w-full p-4 bg-dark-100 rounded-3xl"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-6">
                <input
                  type="email"
                  className="w-full p-4 bg-dark-100 rounded-3xl"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-12">
                <input
                  type="text"
                  className="w-full p-4 bg-dark-100 rounded-3xl"
                  placeholder="Subject"
                  name="subject"
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-12">
                <textarea
                  className="w-full p-4 bg-dark-100 rounded-3xl"
                  placeholder="Message"
                  rows={5}
                  name="message"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="col-span-12">
                <button
                  type="submit"
                  className="w-full p-4 bg-primary rounded-3xl text-dark-100"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
