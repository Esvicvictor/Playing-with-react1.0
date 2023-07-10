import React, { Component } from "react";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleNav = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;
    return (
      <nav className='flex flex-row justify-between items-center bg-slate-950 pl-10 pr-10'>
        <div className='page'>
          <h2>
            <span>1</span>PAGE
          </h2>
        </div>
        <div>
          <ul className="flex flex-row text-white gap-[15px]">
            <li className="hidden md:block">
              <a href=''>MarketPlace</a>
            </li>
            <li className="hidden md:block">
              <a href=''>UnityLink</a>
            </li>
            <li className="hidden md:block">
              <a href=''>Courses</a>
            </li>
          
            <li className="hidden md:block">
              <a href=''>Contact us</a>
            </li>
            
            <li className="hidden md:block">
              <a href=''>Sign Up</a>
            </li>
            <li className="hidden md:block">
              <a href=''>Login</a>
            </li>
          </ul>
        </div>
        <div className='lg:hidden text-white text-xl'>
          <i class='fa-solid fa-ellipsis-vertical' onClick={this.toggleNav}></i>
          {isOpen && (
            <div className="additional">
              <ul>
              <li><a href=''/>MarketPlace</li>
              <li><a href=''/>UnityLink</li>
              <li><a href=''/>Courses</li>
              <li><a href=''/>Contact Us</li>
              <li><a href=''/>Sign Up</li>
              <li><a href=''/>Login</li>
            </ul>
            </div>
           
          )}
        </div>
      </nav>
    );
  }
}
