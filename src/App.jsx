import React, { Component } from 'react'
import Navbar from '../src/pages/Navbar'
import Header from '../src/pages/Header'
import Welcome from '../src/pages/Welcome'
import About from '../src/pages/About'
import Services from '../src/pages/Services'
import Success from '../src/pages/Success'
import Portfolio from '../src/pages/Portfolio'
import Footer from '../src/pages/Footer'
import "./index.css"

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Header/>
        <Welcome/>
        <About/>
        <Services/>
        <Success/>
        <Portfolio/>
        <Footer/>
      </div>
    )
  }
}