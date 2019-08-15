import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
<section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Creations.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt="" src="images/portfolio/2.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Chuck Norris Joke App</h5>
                        <p>React, Javascript</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt="" src="images/portfolio/1.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Quotalicious</h5>
                        <p>React, Rails, Redux</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt="" src="images/portfolio/3.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Favorite Books</h5>
                        <p>Rails</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt="" src="images/portfolio/4.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Todo List App</h5>
                        <p>Javascript, jQuery</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05" title>
                    <img alt="" src="images/portfolio/1.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Pilates Style Website</h5>
                        <p>UI/UX, HTML/CSS, Wordpress, Graphic Design</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06" title>
                    <img alt="" src="images/portfolio/2.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Pilates Style magazine</h5>
                        <p>Print Design</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-07" title>
                    <img alt="" src="images/portfolio/pho-wireframe.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Pho Hotel Wireframe/Prototype</h5>
                        <p>UI/UX</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              
               <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-08" title>
                    <img alt="" src="images/portfolio/5.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Chile Pepper Website</h5>
                        <p>UI/UX, HTML/CSS, Wordpress, Graphic Design</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>  {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-09" title>
                    <img alt="" src="images/portfolio/6.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Beer App</h5>
                        <p>Rails, Javascript</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              
               
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
        </div>
        <div id="modal-01" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src="images/portfolio/modals/m-chuck.png" alt="" />
          <div className="description-box">
            <h4>Chuck Norris App</h4>
            <p>An app that lets people view and vote on Chuck Norris jokes. Because who doesn't need this? Fetched jokes from the Chuck Norris API using Axios, a promise-based HTTP client. 
             Built with React using two components, custom CSS styles, and LocalStorage.</p>
            <span className="categories"><i className="fa fa-tag" />React, Javascript</span>
          </div>
          <div className="link-box">
            <a href="https://react-chuck-jokes.herokuapp.com/" target="_blank">See it in action</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>{/* modal-01 End */}
        <div id="modal-02" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src="images/portfolio/modals/m-quote.png" alt="" />
          <div className="description-box">
            <h4>Quotalicious</h4>
            <p>Allows users to browse, manage and save their favorite famous quotes in user-created lists. Built the front-end with React/Redux, Rails back-end with API for data persistence.
             Integrates Fetch requests to external API for data retrieval from favqs. Styled front end with Semantic UI and custom CSS.</p>
            <span className="categories"><i className="fa fa-tag" />React, Redux, Rails</span>
          </div>
          <div className="link-box">
            <a href="https://quotalicious.herokuapp.com/" target="_blank">See it in action</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>{/* modal-02 End */}
        <div id="modal-03" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src="images/portfolio/modals/m-books.png" alt="" />
          <div className="description-box">
            <h4>Favorite Books</h4>
            <p>Users can create accounts, log in, rate and review books they’ve read, and add them to a master list of books. Leveraged the Ruby on Rails framework to build the application and used custom CSS to design front end.
             Used OmniAuth for OAuth authentication with Facebook. Designed the database schema and configured ActiveRecord associations. <b>Username:</b> Bob Newhart <b>Password:</b> bob</p>
            <span className="categories"><i className="fa fa-tag" />Ruby on Rails</span>
          </div>
          <div className="link-box">
            <a href="https://rima-favorite-books.herokuapp.com/" target="_blank">See it in action</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>{/* modal-03 End */}
        <div id="modal-04" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src="images/portfolio/modals/m-todo.png" alt="" />
          <div className="description-box">
            <h4>Todo List App</h4>
            <p>Just another (prettier) todo list app. Based on Colt Steele’s Web Developer Bootcamp course on Udemy. Built with HTML, CSS, jQuery, JavaScript, Font Awesome, and Google Fonts.</p>
            <span className="categories"><i className="fa fa-tag" />Javascript, jQuery</span>
          </div>
          <div className="link-box">
            <a href="https://rima-todo.herokuapp.com/" target="_blank">See it in action</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>{/* modal-04 End */}
        <div id="modal-05" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src="images/portfolio/modals/m-ps.png" alt="" />
          <div className="description-box">
            <h4>Pilates Style Website</h4>
            <p>Built and maintained blog and e-commerce websites for Pilates Style magazine using Wordpress. Created custom CSS and graphics for the websites and overall brand.</p>
            <span className="categories"><i className="fa fa-tag" />UI/UX, HTML/CSS, Wordpress, Graphic Design</span>
          </div>
          <div className="link-box">
            <a href="https://www.pilatesstyle.com/" target="_blank">See it in action</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>{/* modal-05 End */}
        <div id="modal-06" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src="images/portfolio/modals/m-print.png" alt="" />
          <div className="description-box">
            <h4>Pilates Style Magazine</h4>
            <p>Created magazine layouts and sales collateral from scratch using Adobe Creative Cloud applications. Wrote original articles for all three publications.</p>
            <span className="categories"><i className="fa fa-tag" />Print Design, Illustration, Writing</span>
          </div>
          <div className="link-box">
            <a href="mailto:rima.jean@gmail.com?Subject=Hello%20There" >Request more samples</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>{/* modal-06 End */}
        <div id="modal-07" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src="images/portfolio/modals/m-pho.jpg" alt="" />
          <div className="description-box">
            <h4>Pho Hotel Wireframe/Prototype</h4>
            <p>Conducted user research, created user personas, and built wireframes in Sketch for a hypothetical hotel mobile app. Created paper prototypes to test flow and user experience.</p>
            <span className="categories"><i className="fa fa-tag" />UI/UX</span>
          </div>
          <div className="link-box">
           <a href="mailto:rima.jean@gmail.com?Subject=Hello%20There" >Request more samples</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>{/* modal-07 End */}
        <div id="modal-08" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src="images/portfolio/modals/m-cp.png" alt="" />
          <div className="description-box">
            <h4>Chile Pepper Website</h4>
            <p>Built and maintained blog and e-commerce websites for Chile Pepper magazine using Wordpress. Created custom CSS and graphics for the websites and overall brand.</p>
            <span className="categories"><i className="fa fa-tag" />UI/UX, HTML/CSS, Wordpress, Graphic Design</span>
          </div>
          <div className="link-box">
            <a href="https://www.chilepepper.com/" target="_blank">See it in action</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>{/* modal-01 End */}
        <div id="modal-09" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src="images/portfolio/modals/m-beers.png" alt="" />
          <div className="description-box">
            <h4>Beer List App</h4>
            <p>Ruby on Rails and Active Model Serialization JSON backend. Javascript frontend with ES6 features.</p>
            <span className="categories"><i className="fa fa-tag" />Ruby on Rails, Javascript</span>
          </div>
          <div className="link-box">
            <a href="#" target="_blank">See it in action</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>{/* modal-01 End */}
        {/* row End */}
        </section>
        </React.Fragment>
    );
  }
}