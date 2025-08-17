import React from 'react';
import aboutImg from '../assets/aboutvid.mp4';

const About = () => {
  {
    /* About section here */
  }

  return (
    <div className="section px-2 md:px-[7%] md:pt-[50px] pt-10  flex justify-between w-[100%]  items-center  flex-col md:flex-row ">
      {/* About section of right section here */}
      <div className="right-hero w-[100%] md:w-[50%] flex  flex-col gap-6 ">
        <h2
          data-aos="fade-up-right"
          className="text-white text-[32px] md:text-5xl font-bold "
        >
          I create digital experiences that are beautiful, functional.
        </h2>
        <p data-aos="fade-up-right">
          I build clean, responsive, and user-friendly websites, blending
          creativity with functionality to deliver impactful digital experiences
          for every project.
        </p>
        <p data-aos="fade-up-right">
          I’m a passionate Full-Stack Developer in the making, dedicated to
          crafting beautiful and functional web applications. Every project I
          build is driven by creativity, precision, and the desire to solve
          real-world problems. From designing responsive interfaces to
          developing robust backend solutions, I aim to deliver experiences that
          are intuitive, engaging, and impactful — bringing ideas to life
          through the power of code.
        </p>
      </div>
      <div className=" mt-7  left pt-10 w-[100%]  md:w-[50%] h-[auto]  flex justify-center items-center">
        <video
          data-aos="zoom-in-up"
          loop
          autoPlay
          className="  w-[100%] md:h-[500px] mb-9"
          src={aboutImg}
          alt="hero"
        />
      </div>
    </div>
  );
};

export default About;
