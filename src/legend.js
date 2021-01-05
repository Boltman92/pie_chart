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
        <div>{(Object.keys(props.obj).length > 0) && ( 
       <>{arrayValues.map((value, index) => {       
      return <div className="legend" key={index}>
      <svg  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="10%" height="100%">
      <circle cx="10" cy="10" r="5" fill={arrayColors[index]} 
        key={index}    
        stroke="black"
       strokeWidth="1"
      />          
 </svg>
     <p> {`${value} : ${arrayNumbers[index]}`} </p>
       </div> }
     ) 
} </>
        )}
</div>
   )
}
  
export default Legend;
