import React, { useState } from 'react'

export default function Abc() {

  const [FirstValue , UpdateValue] = useState(0);

  const Adds = () => {
    UpdateValue (FirstValue + 1 );
  
};
return (
    <div>
        
        <h1>{FirstValue}</h1>
        <button onClick={Adds}>click Me for plus</button>
    </div>
  )
}
