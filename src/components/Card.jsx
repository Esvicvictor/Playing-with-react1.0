import React, { Component } from "react";

export default class Card extends Component {
  render() {
    console.log(this.props.user);
    const { title, paragraph, color } = this.props.user;
    return (
      <div className='card' style={{ backgroundColor: `${color}`}}>
        <div className='cardDetail'>
          <div className='border h-[50px] w-[50px] flex justify-center items-center rounded-full border-white mx-auto mt-2'>
            <i class='fa-solid fa-calendar-day'></i>
          </div>
          <h1>{title}</h1>
          <p>{paragraph}</p>
        </div>
      </div>
    );
  }
}
