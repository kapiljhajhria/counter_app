import React, {Component} from "react";
import Counter from './counterComponent'

class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
            {id: 5, value: 0},
        ]
    }
    handleDelete = (id) => {
        this.setState({
            counters: this.state.counters.filter(counter => counter.id !== id)
        })
    }
    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter)
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    }
    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        })
        this.setState({
            counters
        })
    }

    render() {
        return (
            <div>
                <button
                    className="btn btn-primary btn-sm m-2"
                    onClick={this.handleReset}
                >
                    Reset
                </button>
                {this.state.counters.map(ctr =>
                    <Counter
                        key={ctr.id}
                        counter={ctr}
                        handleDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                    />)}
            </div>
        )
    }
}

export default Counters;