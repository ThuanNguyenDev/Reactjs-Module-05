import React from 'react';
import { useState, useEffect } from 'react';

 function Selector() {

    let [selected , setSelected] = useState("0");
    let [valueSelected, setValueSelected] = useState("");

    const choice = e => {
     setSelected (e.target.value);
    };

    console.log("C02");
    useEffect (
    
        () => {
            switch(selected) {
                case "0" :
                    setValueSelected("Java");
                    break;
                case "1" :
                    setValueSelected("Angular");
                    break;
                case "2" :
                    setValueSelected("Javascript");
                    break;
                case "3" :
                    setValueSelected("PHP");
                    break;
                    default:
            }
        }, [selected]
    );

  return (
 
 <div>

 Course : 
 <select onChange={ e => {choice(e);}}>


<option value="0">Java</option>
<option value="1">Angular</option>
<option value="2">Javascript</option>
<option value="3">PHP</option>

 </select>

 <h2> YOUR SELECTED : {valueSelected}   </h2>
 </div>
  );

  
}

export default Selector;

