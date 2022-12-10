import React, { Component } from 'react';
import Home from './../Home/Home'
import About from './../About/About';
import Footer from './../Footer';
import Portfolio from '../Teams';
import Profile from './../Profile';
import SocialMedia from './../SocialMedia';
import Work from './../My Jobs';
class Index extends Component {
  render() {
    return (
      <div>
        <Home/>
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <SocialMedia />
        <Footer />
      </div>
    );
  }
}
export default Index;
