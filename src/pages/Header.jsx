import React, { Component } from "react";
import Button from "../components/Button";

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='controlHeader'>
          <div>
            <button className='button1'><i class="fa-sharp fa-light fa-less-than"></i></button>
          </div>
          <div className='textBox'>
            <h1>Game Development</h1>
            <p>
              The alchemy of imagination and movement, where static ideas
              transform into captivating reality and endless adventure
            </p>
            <Button />
          </div>
          <div>
            <button className='button2'><i class="fa-sharp fa-light fa-greater-than"></i></button>
          </div>
        </div>
      </div>
    );
  }
}
