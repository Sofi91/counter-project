import React from 'react';

class ClassComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    increment() {
        this.setState({ count: this.state.count + 1 })
    }

    decrement() {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment} className='Minus'>+Plus</button>
                <button onClick={this.decrement} className='Plus'>-Minus</button>
            </div>
        )

    }
}
export default ClassComponents