import React,{useState} from 'react';

function StateName (){

const [text,setText] = useState('Hello!');
const change = () => {

    setText ('Welcome!!');

}


return(
    <>

    <p>{text}</p>
    <button onClick ={change}> Change  </button>
    
    </>
);

}
export default StateName;