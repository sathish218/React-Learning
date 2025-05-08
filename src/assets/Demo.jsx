import React,{useState} from "react";

function Demo(){
    const [count,setCount] = useState(0);

    const add = ()=>{
        setCount(count+1)
    }

    const sub =()=>{
        setCount(count-1)
    }

    

    return(
        <div>
            <p>The current count is {count}</p>
            <button onClick={add}>Add</button>
            <button onClick={sub}>Sub</button>
        </div>
    )
}
export default Demo;