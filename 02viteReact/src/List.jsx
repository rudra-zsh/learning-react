const student = 
   [
    {name: "rudra" , id: 1},
    {name: "kinjal" , id: 2},
    {name: "sanjay" , id: 3},
   ]; //it's and array

function StList(){
    const studentList = student.map(
        x => <li key={x.id}>
            {x.name}
        </li>
       );
   return(
    <ul>{studentList}</ul>
   );    
}
export default StList;
