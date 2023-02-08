import "./styles.css"
import {useState} from "react"
function Counter () {
    let [counter,setCounter] = useState(0)
    const plus= () =>{
        setCounter(counter++)
    }
    const mines = () =>{
        setCounter(counter--)
    }
    const refresh = () =>{
        setCounter(0)
    }
    return(
        <div className="x">
        {/*<h3 style={{color : counter === 0 ?'red' : 'green'}}>{counter}</h3>*/}
            <h3 style={counter === 0 ? {color :"red"} : {color : "green"}}>{counter}</h3>
            <br/>
            <button onClick={plus}>
                +
            </button>
            <button onClick={mines}>
                -
            </button>
            <br/>
            <button onClick={refresh}>
                refresh
            </button>
        </div>
    )
}
export default Counter