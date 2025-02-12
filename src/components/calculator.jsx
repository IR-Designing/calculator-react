import React, {useState, useEffect} from 'react';
import "./calculator.css";
import { evaluate } from 'mathjs';


export default function Calculator(props) {
  const [text, settext] = useState("");


  

  const handleButtonClick = (value) => {
    settext((prevText) => {
      return prevText + value; // Append the button value to the existing text
    });
  };
  
  

  const handleBackspaceClick = () => {
    if (text.length > 0) {
      settext((prevText) => prevText.slice(0, -1)); // Remove the last character
    }
  };
  const  handleclearclick=() =>{
    let newtext = ""
    settext(newtext)
}

const onChange = (event) => {
  const value = event.target.value;
  // Allow only numeric values and operators
  if (/^[\d+\-*/.]*$/.test(value)) {
    settext(value);
  } else {
    settext("Error"); // Invalid input detected, show error
  }
};


const handleSolve = () => {
  

  // Check if the expression is valid (non-empty and contains valid characters)
  if (text.trim() === "" || /[^0-9+\-*/().]/.test(text)) {
    settext("Error"); // Invalid input, show error
    return;
  }

  try {
    const result = evaluate(text); // Evaluate the expression
    settext(result.toString()); // Display the result as a string
  } catch (error) {
    settext("Error"); // Display an error if the input is invalid
  }
};







const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent default behavior (form submission)
    handleSolve(); // Call the handleSolve function to evaluate the expression
    console.log("Enter key pressed"); // Log when the Enter key is pressed
  }
};


useEffect(() => {
  window.addEventListener('keydown', handleKeyPress); // Make sure this part is there
  return () => {
    window.removeEventListener('keydown', handleKeyPress); // Cleanup
  };
}, []); // Empty array ensures it runs only once on component mount/unmount

  
  return (
    <>
    <div className='container my-5' >
      <div className={`container shadow border rounded height-20% text-warp bg-${props.mode==="light"?"light":"dark"} border-${props.mode==="light"?"gray":"black"}`} style={{height:420, width:290, backgroundColor:" #fcfcfc"}}>
        <input type="text" className={`my-3 input fs-2 border bg-${props.mode==="light"?"light":"dark"} text-${props.mode==="light"?"dark":"light"} rounded border-${props.mode==="light"?"gray":"black"}`} onChange={onChange} value={text} />
        <button  value={text}  onClick={handleclearclick} className={`${props.mode==="light"?"btn-1":"btn-sym"} shadow btn  my-2 mx-2 rounded-circle border-black`}>AC</button>
        <button  onClick={handleBackspaceClick}   className={`${props.mode==="light"?"btn-1":"btn-sym"} shadow  btn  my-2 rounded-circle mx-2 border-black`}>&#8592;</button>
        <button  onClick={()=> handleButtonClick("%")}   className={`${props.mode==="light"?"btn-1":"btn-sym"} shadow btn  my-2 rounded-circle mx-2 border-black`}>%</button>
        <button  onClick={()=> handleButtonClick("/")}  className={`${props.mode==="light"?"btn-1":"btn-darkmode"}  shadow text dark btn  my-2 rounded-circle mx-2 border-black`}>/</button>
      <div>
        <button  onClick={()=> handleButtonClick("7")}  className={`${props.mode==="light"?"btn-1":"btn-dark"} shadow btn btn-danger my-2 rounded-circle mx-2 border-black`}>7</button>
        <button  onClick={()=> handleButtonClick("8")} className={`${props.mode==="light"?"btn-1":"btn-dark"} shadow btn btn-danger my-2 rounded-circle mx-2 border-black`}>8</button>
        <button  onClick={()=> handleButtonClick("9")} className={`${props.mode==="light"?"btn-1":"btn-dark"} shadow btn btn-danger my-2 rounded-circle mx-2 border-black`}>9</button>
        <button  onClick={()=> handleButtonClick("*")} className={`${props.mode==="light"?"btn-1":"btn-darkmode"} shadow btn btn-danger my-2 rounded-circle mx-2 border-black`}>*</button>
      </div>
      <div>
        <button  onClick={()=> handleButtonClick("4")} className={`${props.mode==="light"?"btn-1":"btn-dark"} shadow btn btn-danger my-2 rounded-circle mx-2 border-black`}>4</button>
        <button  onClick={()=> handleButtonClick("5")} className={`${props.mode==="light"?"btn-1":"btn-dark"} shadow btn btn-danger my-2 rounded-circle mx-2 border-black`}>5</button>
        <button  onClick={()=> handleButtonClick("6")}  className={`${props.mode==="light"?"btn-1":"btn-dark"} shadow btn btn-danger my-2 rounded-circle mx-2 border-black`}>6</button>
        <button  onClick={()=> handleButtonClick("-")} className={`${props.mode==="light"?"btn-1":"btn-darkmode"} shadow btn btn-danger my-2 rounded-circle mx-2`}>-</button>
      </div>
      <div>
        <button  onClick={()=> handleButtonClick("1")} className={`${props.mode==="light"?"btn-1":"btn-dark"} shadow btn btn-danger my-2 rounded-circle mx-2 border-black`}>1</button>
        <button  onClick={()=> handleButtonClick("2")} className={`${props.mode==="light"?"btn-1":"btn-dark"} shadow btn btn-danger my-2 rounded-circle mx-2 border-black`}>2</button>
        <button  onClick={()=> handleButtonClick("3")}  className={`${props.mode==="light"?"btn-1":"btn-dark"} shadow btn btn-danger my-2 rounded-circle mx-2 border-black`}>3</button>
        <button  onClick={()=> handleButtonClick("+")} className={`${props.mode==="light"?"btn-1":"btn-darkmode"} shadow btn btn-danger my-2 rounded-circle mx-2`}>+</button>
      </div>
      <div>
        <button   onClick={()=> handleButtonClick("0")} className={`${props.mode==="light"?"btn-0":"btn-0-dark"} shadow btn btn-dark my-2 mx-2 rounded-pill border-black`}>0</button>
        <button   onClick={()=> handleButtonClick(".")} className={`${props.mode==="light"?"btn-1":"btn-dark"} shadow btn  my-2 rounded-circle mx-2 border-black`}>.</button>
        <button   onClick={handleSolve} className={`${props.mode==="light"?"btn-1":"btn-darkmode"} shadow btn btn-danger my-2 rounded-circle mx-2 border-black`}>=</button>
      </div>
      
        <div>
 
        </div>
      </div>
    </div>
    </>
  )
}
