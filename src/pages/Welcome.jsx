import React, { Component } from 'react'
import Button from '../components/Button'

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <div className='welcome'>
          <h2>Welcome To Our Website</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. ut Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ipsa repellendus asuscipit dolore nulla? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime, qui dignissimos doloribus reprehenderit hic odit. Laudantium, dolore fugiat consequuntur praesentium, magnam doloremque quisquam, ipsum voluptas ipsa repellat error nobis!</p>
          <div>
           <Button/>
          </div>
        </div>
      </div>
    )
  }
}
