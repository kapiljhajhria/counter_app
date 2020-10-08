import React, {useState} from 'react';
import NavBar from "./components/navbar";
import './App.css';
import Counters from "./components/counters";

function App() {
    const [counters, setCounters] = useState([
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
        {id: 5, value: 0},
    ])

    const handleDelete = (id) => {
        setCounters(counters.filter(counter => counter.id !== id));
    }
    const handleIncrement = counter => {
        const newCounters = [...counters];
        const index = newCounters.indexOf(counter)
        newCounters[index] = {...counter};
        newCounters[index].value++;
        setCounters(newCounters);
    }
    const handleReset = () => {
        const tempCounters = counters.map(c => {
            c.value = 0;
            return c;
        })
        setCounters(tempCounters);
    }
    return (
        <React.Fragment
        >
            <NavBar/>
            <main className="container">
                <Counters
                    counters={counters}
                    onReset={handleReset}
                    onIncrement={handleIncrement}
                    onDelete={handleDelete}/>
            </main>
        </React.Fragment>
    );
}

export default App;
