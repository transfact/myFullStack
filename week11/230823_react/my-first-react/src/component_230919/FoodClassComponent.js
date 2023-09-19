import { Component } from 'react';

class FoodClassComponent extends Component {
    render() {
        return (
            <h2>
                제가 좋아하는 음식은 <span style={{ color: 'red' }}>{this.props.food}</span>입니다
            </h2>
        );
    }
}

FoodClassComponent.defaultProps = {
    food: '짬뽕',
};
export default FoodClassComponent;
