import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// const element = <h1>Hello World</h1>;
// ------------------------------------------------------------------------------------------------
// const lakelist = ["Echo Lake", "Maud Lake", "Cascade Lake"]

// function App(props){
//     return(
//         <ul>
//             {props.lakes.map(lake => (<li>{lake}</li>))}
//         </ul>
//     );
// }
// -----------------------------------------------------------------------------------


function App(){
    const [status,setStatus] = useState("Open");
    return(
        <div>
            <h1> Status : {status}</h1>
            <button onClick={() => setStatus("Closed")}>
                Closed
            </button>

            <button onClick={() => setStatus("Open")}>
                Open
            </button>

            <button onClick={() => setStatus("Back in 5 ")}>
                Break
            </button>
        </div>
    );
}


ReactDOM.render(
    <App  />, 
    document.getElementById('root'));