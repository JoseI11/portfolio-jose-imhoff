import Photo_profile from "../assets/Photo_profile.jpg";
export const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center md:text-left md:flex-row mb-16 md:mb-0 lg:flex-row">
      <div className=" md:w-1/2 lg:pr-24 md:pr-16">
        <h1 className="text-6xl font-serif font-bold mb-4 text-NavyBlue">
          Frontend Developer.
        </h1>
        <p className="font-serif leading-relaxed mb-4 text-sm md:text-xl text-NavyBlue ">
          I like to craft frontend products with the best user experience
          possible. Always trying to learn new technologies that help me grow
          mentally and professionally.
        </p>
        <div className="flex justify-center space-x-4 md:justify-start ">
          <a
            href="../Resume/Imhoff_Jose_FrontEnd_Developer_resume.pdf" 
            download="Imhoff_Jose_FrontEnd_Developer_resume.pdf" 
            className="bg-orange-900 text-white px-6 py-3 rounded-lg hover:bg-red-500 transition-all duration-300"
          >
            Download CV
          </a>

          <a
            href="contact" 
           
            className="bg-orange-900 text-white px-6 py-3 rounded-lg hover:bg-red-500 transition-all duration-300"
          >
            Contact me
          </a>
        </div>
      </div>
      <div className=" lg:max-w-lg lg:w-full">
        <img
          className="object-cover bg-white object-center w-96 h-auto"
          alt="hero"
          src={Photo_profile}
        />
      </div>
    </div>
  );
};
