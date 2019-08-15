import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="about">
        <div className="row">
          <div className="five columns">
            <img className="profile-pic" src="images/about-img.png" alt="" />
          </div>
          <div className="seven columns main-col">
            <h2>I do full stack web development & design.</h2>
            <p>I'm based out of Houston, Texas. I recently graduated from 
        the <a href="https://flatironschool.com/campuses/houston/">Flatiron School Full Stack Web Development Program</a>.With experience in Ruby on Rails, JavaScript, and React, I discovered web development through my background as a web designer. This portfolio is just a sample of my work. For more detailed information on my
experience please <a href="contact.html">contact me.</a></p>
            <p>That’s me in seventh grade, by the way. I dress better nowadays, in case you were worried.</p>

            
            <div className="row">
              <div className="columns contact-details">
                <h2>Email Me</h2>
                <p className="address">
                  
                  <span><a href="mailto:rima.jean@gmail.com?Subject=Hello%20There" >rima.jean@gmail.com</a></span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="http://fictionchick.com/resume.pdf" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section>
      </React.Fragment>
    );
  }
}