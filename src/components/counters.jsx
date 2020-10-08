import React, {Component} from "react";
import Counter from './counterComponent'

class Counters extends Component {
    render() {
        return (
            <div>
                <button
                    className="btn btn-primary btn-sm m-2"
                    onClick={this.props.onReset}
                >
                    Reset
                </button>
                {this.props.counters.map(ctr =>
                    <Counter
                        key={ctr.id}
                        counter={ctr}
                        handleDelete={this.props.onDelete}
                        onIncrement={this.props.onIncrement}
                    />)}
            </div>
        )
    }
}

export default Counters;