import React, {Component} from "react";

class Counter extends Component {
    state = {
        count: 0,
        // imageUrl:'https://picsum.photos/200'
        tags: []
    };
    styles = {
        fontSize: 50,
        fontWeight: 'bold'
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>No tags Found</p>
        return <ul>
            {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>;
    }
    handleIncrement(){
        console.log("Increment Clicked")
    }
    render() {
        return (
            <React.Fragment>
                {/*<img src={this.state.imageUrl} alt="Random Image"/>*/}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm"> Increment</button>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary"
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
