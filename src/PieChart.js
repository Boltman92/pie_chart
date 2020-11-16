import React from 'react';


function PieChart(props) {
 
  const inputValues = Object.values(props.obj).map(item => item.number)
  const inputColors = Object.values(props.obj).map(item => item.color)
  const sumArray = inputValues.reduce((acc,rec) => acc+rec)

  const sorted_val = inputValues.sort((a,b) => b-a)
  
  const cirсle_length = 3.14*10
  
  let percentageWeight = []
  let currentSum = sumArray
  for(let i=0; i<sorted_val.length-1; i++) {
    percentageWeight = [...percentageWeight, currentSum-sorted_val[i]]
    currentSum = currentSum - sorted_val[i]
  }
  percentageWeight = [sumArray, ...percentageWeight]

  let firstEl = []
  console.log(percentageWeight)
  for(let i=0; i<sorted_val.length; i++) {
  firstEl = [...firstEl, percentageWeight[i]/sumArray*cirсle_length]
  }
  
 

  return (
     <div className='PieChart'> 
     <svg viewBox="0 0 20 40" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
     {percentageWeight.map((sector, index) => {
       return <circle cx="10" cy="10" r="5" fill="transparent"
       key={index}
      stroke={inputColors[index]}
       strokeWidth="10"
       strokeDasharray={`${firstEl[index]} ${cirсle_length}`}
       transform="rotate(-90) translate(-20)"
      />})} )
     
     </svg>
    </div>
  );
}

export default PieChart;
