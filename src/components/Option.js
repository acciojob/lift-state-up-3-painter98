import React from 'react';

function Option({text,state,option}){
    //console.log(state,option);
    return(
        <div>
            <h2>{text}</h2>
            <button onClick={()=>state(option)}>{option}</button>
        </div>
    )
}

export default Option;