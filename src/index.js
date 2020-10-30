import React from 'react';
import ReactDOM from 'react-dom';

// const element = <h1>Hello World</h1>;

const lakelist = ["Echo Lake", "Maud Lake", "Cascade Lake"]

function App(props){
    return(
        <ul>
            {props.lakes.map(lake => (<li>{lake}</li>))}
        </ul>
    );
}

ReactDOM.render(
    <App lakes={lakelist} />, 
    document.getElementById('root'));