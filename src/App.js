import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getLists } from './actions/lists'
import Tests from './containers/Tests'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer'
import Home from './components/Home'


class App extends Component {

  componentDidMount(){
    this.props.getLists()
  } 

  render(){ 

    return (
      <div className="App" >     

      {/* creates routing to the home page and the test page   */}
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/test" component={Tests} />
        </React.Fragment>
      </Router>
      <Footer />
      </div>
    );
  }  

}

export default connect(null, { getLists } )(App);
