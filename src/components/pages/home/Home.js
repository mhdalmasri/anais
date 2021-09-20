import React, { Component } from 'react';
import logging from 'node-logging-js';

class Home extends Component {
    constructor(props) {
        super(props);
        logging.applyLogging(this, 'Home');
        this.logDebug('init:', props);
    }

    render() {
        return (
            <div className="b-home">
                <h1>Welcome</h1>
            </div>
        );
    }
}

export default Home;
