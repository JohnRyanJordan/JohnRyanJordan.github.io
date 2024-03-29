import { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './footer.css';

class Footer extends Component {
  render() {

    // if(this.props.data){
    //   var networks= this.props.data.social.map(function(network){
    //     return <li key={network.name}><a href={network.url}><FontAwesomeIcon icon={['fab', network.className]}/></a></li>
    //   })
    // }

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            {/* <ul className="social-links">
              {networks}
            </ul> */}
            <ul className="copyright">
              <li>&copy; Copyright 2020 Ryan Jordan</li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <FontAwesomeIcon style={{flex: 1}} icon={"chevron-circle-up"} />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;