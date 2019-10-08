import React, { Component } from 'react';
import image from './FireTransparentBackground.png';

class About extends Component {

    render() {
      return (
        <main role="main" class="container" align="left">
          <br />
        <h2>About</h2>
          <br />
            FireSale is an application designed to help you manage the inventory of any goods or services that you sell.
          <div align="center">
          <br />
          <br />
            <img src={image} alt="fire" style={{width:"200px", height:"200px"}} />
          </div>  
          <br />
        </main>
      )
    }
  
  }
  
  export default About;

