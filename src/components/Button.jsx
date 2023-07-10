import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <div>
        <button className='bg-white py-2 px-4 text-slate-950 rounded border-grey-950 sm:py-1 px-2'>
          Get started
        </button>
      </div>
    )
  }
}
