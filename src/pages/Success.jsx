import React, { Component } from "react";

export default class Success extends Component {
  render() {
    return (
      <div className='success-bg lg:flex-row justify-around items-center flex flex-col'>
        <div className='flex flex-col justify-center items-center mb-4'>
          <div className='border h-[50px] w-[50px] flex justify-center items-center rounded-full border-white'>
            <i class='fa-solid fa-calendar-day'></i>
          </div>
          <h1>12+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>

        <div className='flex flex-col justify-center items-center mb-4'>
          <div className='border h-[50px] w-[50px] flex justify-center items-center rounded-full border-white'>
            <i class='fa-solid fa-trowel-bricks'></i>
          </div>
          <h1>999+</h1>
          <p>COMPUTED PRODUCTS</p>
        </div>

        <div className='flex flex-col justify-center items-center mb-4'>
          <div className='border h-[50px] w-[50px] flex justify-center items-center rounded-full border-white'>
            <i class='fa-solid fa-person-chalkboard'></i>
          </div>
          <h1>480+</h1>
          <p>TOTAL CLIENTS</p>
        </div>

        <div className='flex flex-col justify-center items-center mb-3'>
          <div className='border h-[50px] w-[50px] flex justify-center items-center rounded-full border-white'>
            <i class='fa-solid fa-champagne-glasses'></i>
          </div>
          <h1>15+</h1>
          <p>AWARD WON</p>
        </div>
      </div>
    );
  }
}
