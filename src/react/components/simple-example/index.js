import React from 'react';

import { connect } from 'react-redux';

import { enterIntoMatrix, exit } from '../../../redux/example-redux';

// Simple.js
export class Simple extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.matrix.title || 'Hello World!'}</h1>

                {this.props.matrix.title ? (
                    <button onClick={this.props.exit}>Exit</button>
                ) : (
                        <button
                            onClick={() => this.props.enterIntoMatrix({ title: 'Welcome to Matrix..!' })}
                        >Get in!</button>
                    )}
            </div>
        );
    }
}

// SimpleContainer.js
const mapStateToProps = state => ({
    matrix: state.matrix,
});

const mapDispatchToProps = {
    enterIntoMatrix,
    exit,
};

const SimpleComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Simple);

export default SimpleComponent;
