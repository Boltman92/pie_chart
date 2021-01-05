import React from 'react';


function Legend(props) {
   console.log(props)
    const arrayValues = Object.keys(props.obj)
    const arrayNumbers = Object.values(props.obj).map(item => item.number)
    const arrayColors = Object.values(props.obj).map(item => item.color)
    const smallCircles = arrayValues.map((value, index) => {       
      return <circle cx="10" cy={10+index*11} r="5" fill={arrayColors[index]} 
        key={index}    
        stroke="black"
       strokeWidth="1"
      />         
  })

  const explanation = arrayValues.map((value, index) => {
      return <div className="legend-items" key={index}>
      {`${value} : ${arrayNumbers[index]}`}
      </div>})


   return (
       <div className="parentleg"> {(Object.keys(props.obj).length > 0) && ( <div className="legend">
       <svg className="legend-values" viewBox="0 0 20 50" xmlns="http://www.w3.org/2000/svg" width="10%" height="100%">
     {smallCircles} 
 </svg>
     <div className="legend-values">
      {explanation} </div>
         </div>)}
 </div>
   )
}
  
export default Legend;
