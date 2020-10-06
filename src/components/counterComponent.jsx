import React, {Component} from "react";

class Counter extends Component {
    state = {
        count: 0,
        // imageUrl:'https://picsum.photos/200'
        tags: ['tag1', 'tag2', 'tag3']
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

    render() {
        return (
            <React.Fragment>
                {/*<img src={this.state.imageUrl} alt="Random Image"/>*/}
                {/*<span className={this.getBadgeClasses()}>{this.formatCount()}</span>*/}
                {/*<button className="btn btn-secondary btn-sm"> Increment</button>*/}
                {this.renderTags()}
            </React.Fragment>
        );
    }

    // getBadgeClasses() {
    //     let classes = "badge m-2 badge-";
    //     classes += (this.state.count === 0) ? "warning" : "primary"
    //     return classes;
    // }
    //
    // formatCount() {
    //     const {count} = this.state;
    //     return count === 0 ? "Zero" : count;
    // }
}

export default Counter;
