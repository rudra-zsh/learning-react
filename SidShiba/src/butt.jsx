import {useState} from 'react'










function Any(){

	return(
	<MyButton />
)
}




function MyButton(){

	let [count,setCount] = useState(0);

	function handleClick(){
		setCount(count+1);
	}
	return(
		<button onClick={handleClick}>
		Count => ({count})
		</button>
	)
}

export default Any;
