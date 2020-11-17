import React from 'react';


function PieChart(props) {
 
  const inputValues = Object.values(props.obj).map(item => item.number)
  const sumArray = inputValues.reduce((acc,rec) => acc+rec)

  const sortedValues = Object.values(props.obj).sort((a,b) => b.number - a.number)
  
  const CIRCLE_LENGHT = 3.14*10
  
  let percentageWeight = []
  let currentSum = sumArray
  for(let i=0; i<sortedValues.length-1; i++) {
    percentageWeight = [...percentageWeight, currentSum-sortedValues[i].number]
    currentSum = currentSum - sortedValues[i].number
  }
  percentageWeight = [sumArray, ...percentageWeight]

  let drawnObj = JSON.parse(JSON.stringify(props.obj))
  Object.values(drawnObj).map((item,index) => {
   return item.number = percentageWeight[index]
}) 

  let firstEl = []
  for(let i=0; i<sortedValues.length; i++) {
  firstEl = [...firstEl, percentageWeight[i]/sumArray*CIRCLE_LENGHT]
  }

  return (
     <div className='PieChart'> 
     <svg viewBox="0 0 20 40" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
     {Object.values(drawnObj).map((sector, index) => {
       return <circle cx="10" cy="10" r="5" fill="transparent"
       key={index}
      stroke={sector.color}
       strokeWidth="10"
       strokeDasharray={`${firstEl[index]} ${CIRCLE_LENGHT}`}
       transform="rotate(-90) translate(-20)"
      />})} )
     
     </svg>
    </div>
  );
}

export default PieChart;
