import React, { Component } from "react";

export default class Services extends Component {
  render() {
    return (
      <div>
        <div className='services'>
          <h1>Our Services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            earum, aliquid in nesciunt amet, voluptatem debitis corporis
            molestiae enim dolor quaerat quo, illo alias maxime ratione? Quidem
            aspernatur dolor possimus!
          </p>
        </div>

        <div className='service-margin'>
          <div className='plathora-flex'>
            <div className='plathora'>
              <div className='flex flex-row items-center gap-[20px]'>
                <div className='border h-[40px] w-[40px] lg:w-[50px] lg:h-[50px] flex justify-center items-center rounded-full border-black'>
                  <i class='fa-solid fa-computer'></i>
                </div>
                <p>WEB DESIGN</p>
              </div>
            </div>

            <div className='plathora'>
              <div className='flex flex-row items-center gap-[20px]'>
                <div className='border h-[40px] w-[40px] lg:w-[50px] lg:h-[50px] flex justify-center items-center rounded-full border-black'>
                  <i class='fa-solid fa-laptop-code'></i>
                </div>
                <p>WEB DEVELOPMENT</p>
              </div>
            </div>

            <div className='plathora'>
              <div className='flex flex-row items-center gap-[20px]'>
                <div className='border h-[40px] w-[40px] lg:w-[50px] lg:h-[50px] flex justify-center items-center rounded-full border-black'>
                  <i class='fa-brands fa-themeisle'></i>
                </div>
                <p>THEME DEVELOPMENT</p>
              </div>
            </div>
          </div>

          <div className='plathora-flex'>
            <div className='plathora'>
              <div className='flex flex-row items-center gap-[20px]'>
                <div className='border h-[40px] w-[40px] lg:w-[50px] lg:h-[50px] flex justify-center items-center rounded-full border-black'>
                  <i class='fa-solid fa-chess-queen'></i>
                </div>
                <p>GAME DEVELOPMENT</p>
              </div>
            </div>

            <div className='plathora'>
              <div className='flex flex-row items-center gap-[20px]'>
                <div className='border h-[40px] w-[40px] lg:w-[50px] lg:h-[50px] flex justify-center items-center rounded-full border-black'>
                  <i class='fa-solid fa-robot'></i>
                </div>
                <p>APP DEVELOPMENT</p>
              </div>
            </div>

            <div className='plathora'>
              <div className='flex flex-row items-center gap-[20px]'>
                <div className='border h-[40px] w-[40px] lg:w-[50px] lg:h-[50px] flex justify-center items-center rounded-full border-black'>
                  <i class='fa-solid fa-computer-mouse'></i>
                </div>
                <p>DESKTOP APPLICATION</p>
              </div>
            </div>
          </div>

          <div className='plathora-flex'>
            <div className='plathora'>
              <div className='flex flex-row items-center gap-[20px]'>
                <div className='border h-[40px] w-[40px] lg:w-[50px] lg:h-[50px] flex justify-center items-center rounded-full border-black'>
                  <i class='fa-brands fa-nfc-directional'></i>
                </div>
                <p>WIRELESS THEME</p>
              </div>
            </div>

            <div className='plathora'>
              <div className='flex flex-row items-center gap-[20px]'>
                <div className='border h-[40px] w-[40px] lg:w-[50px] lg:h-[50px] flex justify-center items-center rounded-full border-black'>
                  <i class='fa-solid fa-swatchbook'></i>
                </div>
                <p>RESPONSIVE DESIGN</p>
              </div>
            </div>

            <div className='plathora'>
              <div className='flex flex-row items-center gap-[20px]'>
                <div className='border h-[40px] w-[40px] lg:w-[50px] lg:h-[50px] flex justify-center items-center rounded-full border-black'>
                  <i class='fa-solid fa-infinity'></i>
                </div>
                <p>SUPPORT & IT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
