//class형 컴포넌트

//class 컴포넌트명 extends Component필요
import { Component } from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends Component {
    render() {
        const myname = 'transpact';
        return (
            <div>
                <h2>
                    Hello {myname} from {this.props.name}
                </h2>
                <div>i'm {this.props.age} years old</div>
                <div>this is Class Component</div>
            </div>
        );
    }
}

ClassComponent.defaultProps = {
    name: 'transpact123',
    age: '20',
};

//혹은
// import React from 'react'
// class ClassCompent extends React.Component
export default ClassComponent;
