import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question-container'>
            <h2>Question No: 1</h2>
            <h4>How does react work?</h4>
            <h4>Answer:</h4>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            <h2>Question No: 2</h2>
            <h4>What is the difference between props and state?</h4>
            <h4>Answer:</h4>
            <p>State: State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function.</p>
            <p>Props:on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
            <h2>Question No: 3</h2>
            <h4>Where does useEffect use excpet use API to load data?</h4>
            <h4>Answer:</h4>
            <p>By using this Hook, We tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</p>

        </div>
    );
};

export default Question;