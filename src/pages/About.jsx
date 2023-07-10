import React, { Component } from "react";
import { data } from "../assets/data";
import Card from "../components/Card";

export default class About extends Component {
  render() {
    return (
      <div className='card-flex'>
         
        {data.map((item) => (
          <Card key={item.id} user={item} />
        ))}
      </div>
    );
  }
}
