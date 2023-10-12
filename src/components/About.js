import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
    <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
            <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
                About Me
            </h2>

            <p className="pb-5">
                Hi, My Name Is Balwinder Singh and everyone calls me Balwinder. I am a
                Software Developer specialized in mobile and web application development.
            </p>
            
            <p className="pb-5">
                I am adept in building mobile applications using React Native for both iOS and Android platforms. My expertise in web development is backed by my knowledge of React.js, enriched by the power of Node.js for the backend support.
            </p>

            <p>
                I am also proficient with MongoDB for handling databases, ensuring seamless data management and operations. My skill set also spans across Redux, Redux Tool Kit, Axios, Tailwind CSS, SaSS, and Css3 among others.
            </p>

            <p>
            When not coding, I enjoy conceptualizing and creating code structures. It allows me to visualize and better understand complex coding paradigms and scenarios.
            </p>
        </div>

        <div className="about-img">
            <img
                src={AboutImg}
                alt="coding illustration"
                className="lgw-[80%] md:ml-auto"
            />
        </div>
    </div>
</section>

  );
};

export default About;
