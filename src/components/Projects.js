import React from "react";
import cssProjects from "../assets/cssprojects.png";
import venngo from "../assets/venngo.png";
import venngoApp from "../assets/venngo-App.jpeg";
import opulencelog from "../assets/opulence.png";
import opulenceApp from "../assets/opulence-App.jpeg";
import bnsellit from "../assets/bnsellit.png";
import bitebargains from "../assets/BiteBargain.jpeg";
const Projects = () => {
  const projects = [
    {
      img: bnsellit,
      title: "Bnsellit-Web",
      desc: "BnSellit is a technology platform designed to increase vacation rental property sales",
      live: "https://bnsellit.com/",
    },
    {
      img: opulenceApp,
      title: "e-commerce Android",
      desc: "An e-commerce platform built for Android. Enables easy product browsing  and efficient user management.",
      live: "https://play.google.com/store/apps/details?id=com.opulence&hl=en_CA&gl=US",
    },
    {
      img: opulenceApp,
      title: "e-commerce iOS",
      desc: "An iOS e-commerce app providing seamless shopping experiences with robust features and secure checkout processes.",
      live: "https://apps.apple.com/ca/app/opulence-global/id1512204765",
    },
    {
      img: opulencelog,
      title: "e-commerce Website",
      desc: "A e-commerce website built to enhance online shopping. Features user-friendly navigation and secure payment integration",
      live: "https://build-10-css-projects.netlify.app/",
      code: "https://github.com/Coderamrin/build-10-css-projects",
    },
    {
      img: venngo,
      title: "Marketplace",
      desc: "Local experiences are curated based on location and seamlessly integrated into the platform.",
      live: "https://bnsellit.com/",
    },
    {
      img: venngoApp,
      title: "Venngo android",
      desc: "Premium discount programs featuring exclusive perks from big brands and local favourites.",
      live: "https://play.google.com/store/apps/details?id=com.venngo.mobileperks&hl=en_CA&gl=US",
    },
    {
      img: venngoApp,
      title: "Venngo Ios",
      desc: "Premium discount programs featuring exclusive perks from big brands and local favourites.",
      live: "https://apps.apple.com/ca/app/venngo/id522452356",
    },
    {
      img: bitebargains,
      title: "Bite Bargain IOs",
      desc: "Feast on deals, not on your wallet! With Bite Special, turn leftovers into delightful savings. Dive into discounts, and make every meal memorable",
      live: "https://play.google.com/store/apps/details?id=com.bitebargains",
    },
    {
      img: bitebargains,
      title: "Bite Bargain Android",
      desc: "Feast on deals, not on your wallet! With Bite Special, turn leftovers into delightful savings. Dive into discounts, and make every meal memorable",
      live: "https://apps.apple.com/us/app/bite-bargains/id6467573406",
    },
   
  ];


  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with React,
            MERN and vanilla CSS. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <div className="image-container" style={{ width: 475, height: 250, overflow: 'hidden' }} >
                <img src={project.img} alt={project.title} style={{maxWidth: "100%",height: "auto"}} />
              </div>
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
