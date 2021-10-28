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
        <div className="menuToggle">
          <a className="home" href="/home">
            anaïs
          </a>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul className="menu">
            <a href="/home">
              <li>Home</li>
            </a>
            <a href="/about">
              <li>About</li>
            </a>
            <a href="/info">
              <li>Info</li>
            </a>
            <a href="/contact">
              <li>Contact</li>
            </a>
            <a href="/more">
              <li>Show me more</li>
            </a>
          </ul>
        </div>
        <div className="content">
          <h1 className="title">The best French lesson are with Anaïs</h1>
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
