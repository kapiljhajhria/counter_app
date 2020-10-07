import React,{Component} from "react";

class Counter extends  Component{

    state = {
        value: this.props.counter.value, ///TODO: fix props issue here
        // imageUrl:'https://picsum.photos/200'
    }


    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // styles = {
    //     fontSize: 50,
    //     fontWeight: 'bold'
    // }

    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>No tags Found</p>
    //     return <ul>
    //         {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
    //     </ul>;
    // }

    handleIncrement = (product) => {
        console.log("Increment Clicked");
        // this.state.count++;
        const newCount = this.state.value+1;
        this.setState({
            value: newCount
        });
        //obj.method() this will return ref to the object
        //function() this will return window object, if strict mode is enabled it will return undefined
        //to fix this issue use bind method
    }

    render() {
        return (
            <React.Fragment>
                {/*<img src={this.state.imageUrl} alt="Random Image"/>*/}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={() => {
                        this.handleIncrement("some product/event")
                    }}
                    className="btn btn-secondary btn-sm">
                    Increment
                </button>
                <button
                    className="btn btn-danger btn-sm m-2"
                    onClick={()=>this.handleDelete(this.props.counter.id)}
                >
                    Decrement
                </button>
            </React.Fragment>
        );
    }

    getBadgeClasses=()=> {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary"
        return classes;
    }

    formatCount=()=>{
        const value = this.state.value;
        return value === 0 ? "Zero" : value;
    }

    handleDelete(id) {
        console.log(this.props);
        return this.props.handleDelete(id);
    }
}

export default Counter;