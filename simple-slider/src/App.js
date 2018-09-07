import React, { Component } from 'react';
import './App.css';
import Slide from './components/Slide';
import Button from './components/Button';
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';

const listOfImages = [img1, img2, img3, img4];
const interval = 333000;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { i: 0 };
    }

    increment() {
        if (this.state.i < listOfImages.length - 1) {
            this.setState({ i: this.state.i + 1 });
        } else {
            this.setState({ i: 0 });
        }
    }

    decrement() {
        if (this.state.i > 0) {
            this.setState({ i: this.state.i - 1 });
        } else {
            this.setState({ i: listOfImages.length - 1 });
        }
    }

    componentDidMount() {
        this.sliderID = setInterval(() => {
            return this.increment();
        }, interval);
    }

    componentWillUnmount() {
        clearInterval(this.sliderID);
    }

    render() {
        const i = this.state.i;

        return (
            <div className="App">
                <Button className="Previous" onClick={() => this.decrement()}>Prev</Button>
                <Slide src={listOfImages[i]} />
                <Button className="Next" onClick={() => this.increment()}>Next</Button>
            </div>
        );
    }
}

export default App;
