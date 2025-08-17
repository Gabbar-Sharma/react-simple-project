import React from 'react';

const Footer = () => {
  return (
    <div className="md:px-[7%] bg-[#FFFFFF] w-[100%] h-auto py-2 md:pt-9 flex items-center flex-col gap-9">
      <div
        data-aos="zoom-out-down"
        className="text-center  md:w-[60%] w-[100%] "
      >
        <h2 className="text-[#284B63] mt-9  md:text-[42px] text-3xl font-medium ">
          Lorem ipsum dolor sit amet
        </h2>
        <p className="text-black mt-8 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          dolorem, corrupti explicabo aspernatur saepe eaque minus dicta laborum
          officiis ea et inventore rem cumque, nulla ratione error reprehenderit
          eius labore.
        </p>
      </div>
      <button className="px-4 hover:shadow-xl bg-green-400 rounded-md py-2 shadow-lg border">
        Read More
      </button>
      <div className="text-center text-[8px] font-normal py-1 md:text-[12px] navbar font-poppins bg-[#284B63] w-[100%]">
        <h1 className="w-[100%]"> Made By | Soltrix | My Portfolio </h1>
      </div>
    </div>
  );
};

export default Footer;
