import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './about.css';

class About extends Component {
  render() {

    if(this.props.data){
      var profilePic = require(`../../assets/images/${this.props.data.image}`).default;
      var bio = this.props.data.bio;
      var email = this.props.data.email;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><FontAwesomeIcon icon={['fab', network.className]}/></a></li>
      })
      // var articles= this.props.data.articles.map(function(article){
      //   return <li key={article.title}><a href={article.url}>{article.title}</a> <br/> <span> on: {article.source}</span> </li>
      // })
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic"  src={profilePic} alt="profilePic" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
            <div className="row">
              <div className="columns details">
                <h2>Connect with me on Github!</h2>
                <p> <a href={"mailto:"+{email}}><span>{email}</span></a> </p>
                <ul className="social">
                  {networks}
                </ul>
              </div>
              {/*
              <div className="columns details">
                <FontAwesomeIcon className="section-icon" icon={"book-open"} />
                <h2>Interesting Articles</h2>
                <ul className="articles">
                  {articles}
                </ul>
              </div>
              */}

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;