import React, { Component } from 'react';

class Home extends Component {

    render() {
      return (
        <main role="main" class="container" align="center">
          <br />
        <h2>Language Tester</h2>
          <br />
            Welcome to language tester. Please enter a word in your native language and a foreign language.
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

