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
            Hello, I'm Balwinder, a Software Developer specializing in web and mobile apps. 
            </p>
            
            <p className="pb-5">
            Expert in React.js, React Native, and Node.js, I craft robust applications, with proficiency in databases via MongoDB. Skilled in JavaScript, TypeScript, HTML, JSX, and cloud services like AWS, EC2, and Digital Ocean, I'm passionate about efficient, scalable solutions.
            </p>

            <p>
            Beyond coding, I enjoy dissecting complex coding structures, enhancing my problem-solving arsenal.
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
