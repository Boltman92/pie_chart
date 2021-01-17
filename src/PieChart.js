import React from 'react';
import Legend from './legend'

const CIRCLE_LENGHT = 3.14*10

function PieChart(props) {
  const sumArray = Object.values(props.obj).reduce((acc,rec) => acc + rec.number, 0)
  const sortedValues = Object.values(props.obj).sort((a,b) => b.number - a.number)
  
  let percentageWeight = [ sumArray ]
  let currentSum = sumArray

  for (const val of sortedValues) {
    percentageWeight.push(currentSum - val.number);
    currentSum -= val.number;
  }
  
  const firstEl = percentageWeight.map(weight => CIRCLE_LENGHT * (weight / sumArray));

  return (
     <div className='PieChart'> 
     <svg viewBox="0 0 20 40" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
     {sortedValues.map((sector, index) => {
       return <circle cx="10" cy="10" r="5" fill="transparent"
       key={index}
      stroke={sector.color}
       strokeWidth="10"
       strokeDasharray={`${firstEl[index]} ${CIRCLE_LENGHT}`}
       transform="rotate(-90) translate(-20)"
      />})} )
     
     </svg>
     <Legend obj={props.obj} deleteEl={props.deleteEl}/> 
    </div>
  );
}

export default PieChart;
