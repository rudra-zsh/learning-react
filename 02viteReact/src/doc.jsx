import { useState } from "react";

export default function MyApp(){
    const [count,setCount] = useState(0);
    function handelClick(){
        setCount(count+1);
    }
    return(
        <div>
            <h1>Same Value in both of the Button</h1>
            <MyButton count={count} onClick={handelClick}/>
            <MyButton count={count} onClick={handelClick}/>
        </div>
    )
}

function MyButton({count,onClick}){
    return(
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    )
}