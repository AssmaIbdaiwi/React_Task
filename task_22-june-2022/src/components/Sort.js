import React from "react";



export default function Sort() {

const employees1=['Z' , 'A' , 'Q', 'B' ,'C', 'Y' ,'S','W'];
  const result=employees1.sort();

  
    return (
      <div class="container">
<h1>The sorted array is:</h1>
<h2>{employees1.map(data=> data).join(", ")}</h2>

  
      </div>
    );
  }