import React from 'react';

function Clear(props) {
   const inputObj = props.props.obj
   const index = props.index
   const value = props.value
   console.log(props)
   console.log(props.props.obj)
   console.log(index)
   return (<button
            type="button"
            onClick={() => props.deleteEl(inputObj, index, value)} >
            delete
          </button>)
}
function Legend(props) {
  // Blabla
  //   const arrayValues = Object.keys(props.obj)
  //   const arrayNumbers = Object.values(props.obj).map(item => item.number)
  //   const arrayColors = Object.values(props.obj).map(item => item.color)
      
  //  return (
  //     <div>{(Object.keys(props.obj).length > 0) && ( 
  //       <>{arrayValues.map((mappedValue, index) => {    

  //         return <div className="legend" key={index} id={index}>
  //         <svg  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="10%" height="100%">
  //           <circle cx="10" cy="10" r="5" fill={arrayColors[index]} 
  //             key={mappedValue}    
  //             stroke="black"
  //             strokeWidth="1"
  //           />          
  //         </svg>
  //         <p> {`${mappedValue} : ${arrayNumbers[index]}`} </p>
  //         <Clear props={props} deleteEl={props.deleteEl} index={index} value={mappedValue}/></div> }
  //       )} </>
  //     )}
  //     </div>
  //  )
  return (
      <div>{(Object.keys(props.obj).length > 0) && ( 
        <>{Object.entries(props.obj).map(([item, params], index) => {    

          return <div className="legend" key={index} id={index}>
          <svg  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="10%" height="100%">
            <circle cx="10" cy="10" r="5" fill={params.color} 
              key={item}    
              stroke="black"
              strokeWidth="1"
            />          
          </svg>
          <p> {`${item} : ${params.number}`} </p>
          <Clear props={props} deleteEl={props.deleteEl} index={index} value={item}/></div> }
        )} </>
      )}
      </div>
   )
}
  
export default Legend;
