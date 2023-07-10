import React, { Component } from "react";

export default class Image extends Component {
  render() {
    const { img } = this.props.user;
    return (
      <div>
        <div className="mt-2"> 
          <img src={img} className="w-[260px] h-[9rem] mx-auto"/>
        </div>
      </div>
    );
  }
}
