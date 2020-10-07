import React,{Component} from "react";

class Counter extends  Component{

    state = {
        value: this.props.counterValue, ///TODO: fix props issue here
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
}

export default Counter;

// export default function Counter(props) {
//     ///TODO: fix props issue here
//     const [value, setValue] = React.useState(props.counterValue);
//
//
//     function handleIncrement(product) {
//         console.log("Increment Clicked");
//         let countValue = value;
//         console.log(props);
//         setValue(++countValue)
//     }
//
//     function getBadgeClasses() {
//         let classes = "badge m-2 badge-";
//         classes += (value === 0) ? "warning" : "primary"
//         return classes;
//     }
//
//     function formatCount() {
//         let countValue = value;
//         return countValue === 0 ? "Zero" : countValue;
//     }
//
//     return (
//         <React.Fragment>
//             <span className={getBadgeClasses()}>{formatCount()}</span>
//             <button
//                 onClick={() => {
//                     handleIncrement("some product/event")
//                 }}
//                 className="btn btn-secondary btn-sm">
//                 Increment
//             </button>
//         </React.Fragment>
//     );
// }

