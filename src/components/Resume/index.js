import React, { Component } from 'react';

import styles from './resume.css';

class Resume extends Component {
  render() {
    console.log(this.props.data);
    if(this.props.data){
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
        </div>
      })

      var certificates = this.props.data.certifications.map(function(certifications){
        var badgeImage = 'images/badges/'+certifications.badge;

        return <div key={certifications.certificate}>
        <h3>{certifications.certificate}</h3>
        <p className={styles.info}>
          <a href={certifications.url}>
            <img className="badge" alt={certifications.badge} src={badgeImage} />
          </a>
          <span>&bull;</span>
          <em className="date">{certifications.attained}</em>
        </p>
        <p>{certifications.description}</p></div>
      })

      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
    }

    return (
      <section id="resume">
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>

        <div className="row certifications">
          <div className="three columns header-col">
            <h1><span>Certifications</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {certificates}
              </div>
            </div>
          </div>
        </div>

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default Resume;