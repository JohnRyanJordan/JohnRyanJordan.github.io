import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './header.css';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><FontAwesomeIcon icon={['fab', network.className]}/></a></li>
      })

    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <ul id="nav" className={styles.nav}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
  	        <li><a href="#resume">Resume</a></li>
            <li><a href="#portfolio">Works</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{"I'm"} {name}.</h1>
            <ul className="social">
              {networks}
            </ul>
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