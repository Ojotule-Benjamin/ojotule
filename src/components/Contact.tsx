import React, { useState, useEffect } from "react";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const [currentYear, setCurrentYear] = useState<number>();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  // const [submitted, setSubmitted] = useState<boolean>(false);
  // const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const year: number = new Date().getFullYear();
    setCurrentYear(year);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(message);
  };

  return (
    <div
      className="bg-secondaryColorBg flex flex-col gap-10 px-3 md:px-11 lg:px-8 relative"
      id="contact"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <div>
        <h1 className="flex font-montserrat font-semibold text-textWhite text-lg lg:text-3xl ">
          {" "}
          Get In <span className=" pl-2 text-primaryColor">Touch</span>
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-1/2 flex items-start justify-center gap-7 flex-col "
        //style={{ height: "calc(100vh - 250px)" }}
      >
        <input
          className="w-full h-16 bg-secondaryColor outline-none text-textWhite pl-5 lg:pl-10"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
          required
        />
        <input
          className="w-full h-16 bg-secondaryColor outline-none text-textWhite pl-5 lg:pl-10"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
          required
        />
        <textarea
          className="w-full h-36 pt-5 bg-secondaryColor outline-none text-textWhite pl-5 lg:pl-10"
          placeholder="Enter Your Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button
          type="submit"
          className="w-40 h-10 md:w-56 md:h-12 mt-3 rounded-xl border-0 text-xs lg:text-base text-textWhite font-montserrat font-medium cursor-pointer bg-primaryColor"
        >
          Send Message
        </button>
      </form>

      <footer className="w-full h-20 flex items-center justify-center absolute left-0 right-0 bottom-0 bg-secondaryColor">
        <div className="w-full flex items-center justify-between px-3 md:px-11 lg:px-8">
          <div className="left flex items-center justify-center ">
            <p className="text-textWhite font-montserrat font-normal text-[8px] md:text-base lg:text-base">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>
          <div className="right flex items-center justify-center gap-3 md:gap-5 font-montserrat font-normal text-sm md:text-base ">
            <a
              href="https://twitter.com/Rockefellerjr1"
              target={"_blank"}
              rel="noreferrer"
              className="text-textWhite hover:text-primaryColor font-montserrat font-normal text-xs md:text-base"
            >
              Twitter
            </a>
            <a
              href="https://www.behance.net/ochumaojochoko"
              target={"_blank"}
              rel="noreferrer"
              className="text-textWhite hover:text-primaryColor  font-montserrat font-normal text-xs md:text-base"
            >
              Blog
            </a>
            <a
              href="https://www.linkedin.com/in/ojotule-benjamin-ajodo-70a99773?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwfSF2aKFT72b44q0kdH5kg%3D%3D"
              target={"_blank"}
              rel="noreferrer"
              className="text-textWhite hover:text-primaryColor  font-montserrat font-normal text-xs md:text-base"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Ojotule-Benjamin"
              target={"_blank"}
              rel="noreferrer"
              className="text-textWhite hover:text-primaryColor font-montserrat font-normal text-xs md:text-base"
            >
              Github
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
