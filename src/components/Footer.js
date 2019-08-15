import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>

<footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href="https://github.com/Naudria/"><i className="fa fa-github" /></a></li>
              <li><a href="https://www.deviantart.com/fictionchick/gallery/"><i className="fa fa-deviantart" /></a></li>
              <li><a href="https://www.linkedin.com/in/rima-jean-789b57102/"><i className="fa fa-linkedin" /></a></li>
            </ul>
            <ul className="copyright">
              <li>© Copyright 2019 Rima</li>
              <li>Based on a design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a>, converted to <a href="https://reactjs.org/">React</a> by me.</li>   
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer> {/* Footer End*/}
       </React.Fragment>
    );
  }
}