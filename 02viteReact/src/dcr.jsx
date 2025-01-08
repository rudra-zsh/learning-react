import {count} from './event.jsx'
import {setCount} from './event.jsx'
import {useState} from 'react'
function Dcr()
{
    return(
        <button onClick={
            function (){
                setCount(count-1);
            }
        }
        >
            Clicked {count} Times
        </button>
    )
}

export default Dcr