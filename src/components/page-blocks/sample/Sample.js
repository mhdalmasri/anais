import React, { Component } from 'react';
import logging from 'node-logging-js';

class Sample extends Component {
    constructor(props) {
        super(props);
        logging.applyLogging(this, 'Sample');
        this.logDebug('init:', props);
    }

    render() {
        return (
            <div className="b-sample">
                Congratulations, your nikita kickstarter was built successfully! :)
            </div>
        );
    }
}

export default Sample;
