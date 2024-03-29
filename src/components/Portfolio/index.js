import { Component } from 'react';
import './portfolio.css';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={require(`../../assets/images/portfolio/${projects.image}`).default} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>{"What I've Been Working on"}</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters cf">
                {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;