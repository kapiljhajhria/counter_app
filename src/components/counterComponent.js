import React, {Component} from "react";

class Counter extends Component {

    render() {
        const decrementBtnClassName = "btn btn-secondary btn-sm m-2"+this.props.counter.value===0?' disabled':'';
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={() => {
                        this.props.onIncrement(this.props.counter);
                    }}
                    className="btn btn-secondary btn-sm m-2">
                    +
                </button>
                <button
                    onClick={() => {
                        this.props.onDecrement(this.props.counter);
                    }}
                    className={decrementBtnClassName}>
                    -
                </button>
                <button
                    className="btn btn-danger btn-sm m-2 disabled"
                    onClick={() => this.handleDelete(this.props.counter.id)}
                >
                    X
                </button>
            </div>
        );
    }

    getBadgeClasses = () => {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary"
        return classes;
    }

    formatCount = () => {
        const value = this.props.counter.value;
        return value === 0 ? "Zero" : value;
    }

    handleDelete(id) {
        console.log(this.props);
        return this.props.handleDelete(id);
    }
}

export default Counter;