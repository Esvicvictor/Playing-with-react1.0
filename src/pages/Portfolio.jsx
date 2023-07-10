import React, { Component } from "react";
import { imageData } from "../assets/imageData";
import Image from "../components/Image";

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className='portfolio'>
          <h1>Our Portfolio</h1>
          <p className='w-[74%] text-center mx-auto lg:w-[50%]'>
            Our portfolio showcases a diverse range of projects and experiences
            that reflect our passion for creativity and problem-solving. With a
            keen eye for detail and a strong foundation in design principles, we
            strive to deliver innovative solutions that leave a lasting impact.
          </p>
        </div>

        <div className='flex items-center justify-center gap-[20px] mt-3 lg:flex-row md:flex flex-col mt-4'>
          <div className='border h-10 w-10 flex justify-center items-center rounded-full border-black'>
            <i class='fa-solid fa-check-to-slot'></i>
          </div>
          <div className='flex gap-[10px] md:flex flex-col text-sm text-center lg:flex-row'>
            <a href='/#'>App Development</a>
            <a href='/#'>Game Development</a>
            <a href='/#'>Cryptocurrency</a>
          </div>
        </div>

        <div className='ml-20 mr-20 mb-5 mt-5 lg:flex-row justify-center items-center gap-[10px] md:flex flex-col'>
          {imageData.map((item) => (
            <Image key={item.id} user={item} />
          ))}
        </div>
      </div>
    );
  }
}
