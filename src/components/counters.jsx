import React, {Component} from "react";
import Counter from './counterComponent'

class Counters extends Component {
    render() {
        const {onReset, counters, onDelete, onIncrement} = this.props;
        return (
            <div>
                <button
                    className="btn btn-primary btn-sm m-2"
                    onClick={onReset}
                >
                    Reset
                </button>
                {counters.map(ctr =>
                    <Counter
                        key={ctr.id}
                        counter={ctr}
                        handleDelete={onDelete}
                        onIncrement={onIncrement}
                    />)}
            </div>
        )
    }
}

export default Counters;