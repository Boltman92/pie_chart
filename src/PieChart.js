import React from 'react';


function PieChart(props) {
 
  const sumArray = Object.values(props.obj).reduce((acc,rec) => acc+rec)
  const percent = (element, res_object) => {
     return element/sumArray*100
  }
  
  const sorted_val = Object.values(props.obj).sort((a,b) => b-a)
  
  const cirсle_length = 3.14*10
  
  let percentageWeight = []
  let currentSum = sumArray
  for(let i=0; i<sorted_val.length-1; i++) {
    percentageWeight = [...percentageWeight, currentSum-sorted_val[i]]
    currentSum = currentSum - sorted_val[i]
  }
  percentageWeight = [sumArray, ...percentageWeight]

  let firstEl = []
  
  for(let i=0; i<sorted_val.length; i++) {
  firstEl = [...firstEl, (percent(percentageWeight[i], percentageWeight)*cirсle_length)/100]
  }
  
  function generateColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16)
}

  return (
     <div className='PieChart'> 
     <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
     <circle cx="10" cy="10" r="10" fill="red"
      />
     {percentageWeight.map((sector, index) => {
       return <circle cx="10" cy="10" r="5" fill="transparent"
       key={index}
      stroke={generateColor()}
       strokeWidth="10"
       strokeDasharray={`${firstEl[index]} ${cirсle_length}`}
       transform="rotate(-90) translate(-20)"
      />})} )
     
     </svg>
    </div>
  );
}

export default PieChart;
