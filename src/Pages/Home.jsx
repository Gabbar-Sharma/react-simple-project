import React from 'react';
import heroImg from '../assets/hero.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  return (
    <div className="section px-2 md:px-[7%] md:pt-[70px] flex justify-between w-[100%]  items-center  flex-col md:flex-row ">
      {/* Yaha tumhara content aayega/left  */}
      <div
        data-aos="fade-right"
        className=" mt-7  left pt-10 w-[100%]  md:w-[50%] h-[auto]  flex justify-center items-center"
      >
        <img className="h-[300px] md:h-[500px]" src={heroImg} alt="hero" />
      </div>
      {/*Right section here */}
      <div className="right-hero w-[100%] md:w-[50%] flex  flex-col gap-6 ">
        <h2
          data-aos="fade-left"
          className="text-white text-[32px] md:text-5xl font-bold  "
        >
          Learning, Building, and Innovating Every Day On a Journey to Become
        </h2>

        <p data-aos="fade-left">
          I build clean, responsive, and user-friendly websites, blending
          creativity with functionality to deliver impactful digital experiences
          for every project.
        </p>
        <p data-aos="fade-left">
          I’m a passionate Full-Stack Developer in the making, dedicated to
          crafting beautiful and functional web applications. Every project I
          build is driven by creativity, precision, and the desire to solve
          real-world problems. From designing responsive interfaces to
          developing robust backend solutions, I aim to deliver experiences that
          are intuitive, engaging, and impactful — bringing ideas to life
          through the power of code.
        </p>
      </div>
    </div>
  );
};

export default Home;
