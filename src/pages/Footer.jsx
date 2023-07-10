import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="bg-slate-950">
        <div className='lg:flex flex-row justify-center items-center text-white p-10'>
          <img
            className='border-double border-4 rounded-t-full w-[170px] h-[180px] md:mr-10 mx-auto'
            src='https://media.licdn.com/dms/image/C4D03AQGede0vcBAtyA/profile-displayphoto-shrink_800_800/0/1658563823868?e=2147483647&v=beta&t=Q-k-83z4KDSAvjks2BwJDu3rgmVcgZhUwp-_K-BRgr0'
          />
          <div className="ml-4">
            <h1 className="lg:text-4xl md:text-xl mt-8 mb-2 ml-5">Esvic Victor</h1>
            <p className="text-xl ml-5">Educator + Frontend Developer</p>
            <p className="text-sm md:w-[40%] w-[80%] mt-2 ml-5">
              She is passionate about bringing ideas to reality through writing
              and coding.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
