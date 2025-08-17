import React from 'react';
import user1 from '../assets/user1.jpg';
import user2 from '../assets/user2.jpg';
import user3 from '../assets/user3.jpg';

const Contact = () => {
  const data = [
    { id: 1, name: 'Manuel Fadem', image: user1 },
    { id: 2, name: 'Raphael Casciola', image: user2 },
    { id: 3, name: 'Odis Supik', image: user3 },
  ];
  return (
    <div className="md:px-[7%] bg-[#FFFFFF] w-[100%] h-auto py-2 md:pt-[100px] flex items-center flex-col gap-9">
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="text-center pt-[100px] md:w-[60%] w-[100%] "
      >
        <h2 className="text-[#284B63] mt-9  md:text-[42px] text-3xl font-medium ">
          Our Contact
        </h2>
        <p className="text-black mt-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          dolorem, corrupti explicabo aspernatur saepe eaque minus dicta laborum
          officiis ea et inventore rem cumque, nulla ratione error reprehenderit
          eius labore.
        </p>
      </div>
      <div className="cards mt-6 flex flex-col md:flex-row gap-9  md:gap-[100px]  items-center">
        {data.map((dataUser) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="card gap-7 border md:p-5 p-4 hover:shadow-md w-[70%] shadow cursor-pointer  flex justify-center items-center flex-col  "
              key={dataUser.id}
            >
              <img
                className="md:w-[200px] h-[auto] w-[100%] rounded-md "
                src={dataUser.image}
                alt={dataUser.name}
              />
              <h2 className="text-center font-bold text-[16px]">
                {dataUser.name}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
