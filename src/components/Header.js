import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            
            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
            
            <li><a className="smoothscroll" href="#about">Contact</a></li>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm <span>Rima.</span></h1>
            <h3> I'm a <span>designer</span> who gets her hands dirty with <span>code</span> and loves it. </h3>
            <hr />
            <ul className="social">
              <li><a href="https://github.com/Naudria/"><i className="fa fa-github" /></a></li>
              <li><a href="https://www.deviantart.com/fictionchick/gallery/47186552/my-personal-faves"><i className="fa fa-deviantart" /></a></li>
              <li><a href="https://www.linkedin.com/in/rima-jean-789b57102/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://dribbble.com/FictionChick"><i className="fa fa-dribbble" /></a></li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>
      </React.Fragment>
    );
  }
}
