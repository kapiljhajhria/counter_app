import React, {Component} from "react";

class Counter extends Component {

    render() {
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={() => {
                        this.props.onIncrement(this.props.counter);
                    }}
                    className="btn btn-secondary btn-sm">
                    Increment
                </button>
                <button
                    className="btn btn-danger btn-sm m-2"
                    onClick={() => this.handleDelete(this.props.counter.id)}
                >
                    Decrement
                </button>
            </React.Fragment>
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