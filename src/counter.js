import React, { useState} from "react";

function Counter(){  
const [count, setCount] = useState(0)
        return (
            <div>
                <h3>Counter App</h3>
                <div className="container">
                    <button onClick={() => setCount(count-1)} className="btn-blue">-</button>
                    <p>{count}</p>
                    <button onClick={() => setCount(count+1) } className="btn-pink">+</button>
                </div>
            </div>
        )
}


export default Counter;