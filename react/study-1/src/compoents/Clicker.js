import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Clicker extends Component {

    constructor(props) {
        super();

        this.state = {
            count: props.count
        };

        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
        this.resetCount = this.resetCount.bind(this);
    }

    incrementCount() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    decrementCount() {
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    }

    resetCount() {
        this.setState(() => ({ count: 0 }));
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <h1>{this.state.count}</h1>
                    </div>
                    <div>
                        <button onClick={this.incrementCount}>
                            +
                        </button>
                        <button onClick={this.resetCount}>
                            Reset
                        </button>
                        <button onClick={this.decrementCount}>
                            -
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Clicker.defaultProps = {
    count: 0
};

Clicker.propTypes = {
    count: PropTypes.number
};

export default Clicker;
