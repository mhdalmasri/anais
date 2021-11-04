import React, { Component } from 'react';
import logging from 'node-logging-js';

class Home extends Component {
  constructor(props) {
    super(props);
    logging.applyLogging(this, 'Home');
    this.logDebug('init:', props);
  }
  onChange = (event) => {
    console.log(event.target.value);
  };

  render() {
    return (
      <div className="b-home">
        <div className="header">
          <div className="menuToggle">
            <input type="checkbox" className="input" />
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <ul className="menu">
              <a href="/home" className="link">
                <li>Home</li>
              </a>
              <a href="/about" className="link">
                <li>About</li>
              </a>
              <a href="/info" className="link">
                <li>Info</li>
              </a>
              <a href="/contact" className="link">
                <li>Contact</li>
              </a>
              <a href="/more" className="link">
                <li>More</li>
              </a>
            </ul>
          </div>
          <a className="logo" href="/home">
            anaïs
          </a>
        </div>
        <div className="content">
          <div className="title">
            <p className="text">
              The best
              <br />
              French lesson
              <br />
              are with Anaïs
            </p>
          </div>
          <div className="form" action="/">
            <select name="cars" id="cars" className="dropdown" onChange={this.onChange}>
              <option value="" disabled selected hidden>
                Select your level
              </option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            <input type="text" onChange={this.onChange} className="location" placeholder="&#xf041;   your location" />
          </div>
          <div className="illustration">
            <div className="box">
              <div className="shape1"></div>
            </div>
            <div className="box">
              <div className="shape2"></div>
            </div>
            <div className="box">
              <div className="shape3"></div>
            </div>
            <div className="box">
              <div className="shape4"></div>
            </div>
            <div className="box">
              <div className="shape5"></div>
            </div>
            <div className="box">
              <div className="shape6"></div>
            </div>
            <div className="box">
              <div className="shape7">
                <button className="submit" onClick={() => console.log('submit')}>
                  &#8594;
                </button>
              </div>
            </div>
            <div className="box">
              <div className="shape8"></div>
            </div>
            <div className="box">
              <div className="shape9"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
