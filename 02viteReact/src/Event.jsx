import {useState} from 'react'

function Event(){
    const [count,setCount] = useState(0);
    function handleClick(){
        setCount(count+1);
    }
    function dcr(){
        setCount(count-1);
    }
    return(
        <>
        <button onClick={handleClick}>Click</button>
        <button onClick={dcr}>Click</button>
        <h1>Clicked {count} Times</h1>
        </>
    )
}

export default Event