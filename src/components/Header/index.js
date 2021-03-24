import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './header.css';

class Header extends Component {
  state = {
    color: 'transparent'
  }

  listenScrollEvent = e => {
    if (window.scrollY > 30) {
      this.setState({color: '#2B2B2B'})
    } else {
      this.setState({color: 'transparent'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {

    if(this.props.data){
      var name = this.props.data.name;
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <ul id="nav" className="nav" style={{backgroundColor: this.state.color}}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
  	        <li><a href="#resume">Resume</a></li>
            <li><a href="#portfolio">Works</a></li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{"I'm"} {name}.</h1>
          </div>
        </div>

        <p className="scrolldown">
          <a href="#portfolio"><FontAwesomeIcon style={{flex: 1}} icon={"chevron-circle-down"} /></a>
        </p>
      </header>
    );
  }
}

export default Header;