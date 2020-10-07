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

    render() {
        return (
            <div>
                {this.state.counters.map(ctr =>
                    <Counter
                        key={ctr.id}
                        counterValue={ctr.value}
                    />)}
            </div>
        )
    }

}

export default Counters;