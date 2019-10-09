import React, { Component } from 'react';
import image from './FireTransparentBackground.png';

class Home extends Component {

    render() {
      return (
        <main role="main" class="container" align="center">
          <br />
        <h2>Welcome</h2>
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
  
  export default Home;

