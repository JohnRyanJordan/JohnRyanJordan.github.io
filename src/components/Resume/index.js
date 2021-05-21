import React, { Component } from 'react';

import './resume.css';

class Resume extends Component {
  render() {
    if(this.props.data){
      var work = this.props.data.work.map(function(work){
        let description = work.description.split('\n').map(i => {
            return <li>- {i}</li>
        });
        return <div key={work.company}><h3>{work.title}</h3>
          <p className="info">{work.company}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <ul className="work-description">
            {description}
          </ul>
        </div>
      })

      var certificates = this.props.data.certifications.map(function(certifications){
        return <div key={certifications.certificate}>
        <h3>{certifications.certificate}</h3>
        <p className="info">
          <a href={certifications.url}>
            <img className="badge" alt={certifications.badge} src={require(`../../assets/images/badges/${certifications.badge}`).default} />
          </a>
          <span>&bull;</span>
          <em className="date">{certifications.attained}</em>
        </p>
        <p>{certifications.description}</p></div>
      })

      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.degree}</h3>
        <p className="info">{education.school} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      });

      var resumeDownload = this.props.data.resumedownload;

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
        <div className="columns download">
           <p>
              <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
           </p>
        </div>
      </section>
    );
  }
}

export default Resume;