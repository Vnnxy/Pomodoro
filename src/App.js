import './App.css';
import React, { useState, useRef, useEffect } from "react";

const App = () =>{
  const Ref = useRef(null);

  const [timer, setTimer] = useState("00:00");

  const getTimeDifference = (t) =>{
    const total = Date.parse(t)-Date.parse(new Date());
    const min= Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);
    return {
      total,
      min,
      seconds,
  };
  };

  const startTimer = (t) =>{
    let {total, min, seconds} = getTimeDifference(t);
    if (total>=0){
      setTimer((min > 9? min: "0" + min) +
    ":" +
    (seconds > 9 ? seconds : "0" + seconds));
    };
  };

  const clearTimer = (t) =>{
    //setTimer("00:00:10");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
        startTimer(t);
    }, 1000);
    Ref.current = id;
  }

  const getDeadTime = (newTime) => {
    let deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + newTime);
    return deadline;
  }

  
  useEffect(() => {
    clearTimer(getDeadTime(1));
}, []);

const onClickReset = () => {
  clearTimer(getDeadTime(1));
};


const [minValue, setMinValue] = useState(0); // State to hold input value
const [secValue, setSecValue] = useState(0); // State to hold input value

const handleSecChange = (event) => {
  setSecValue(parseInt(event.target.value)); // Update input value on change
};

const handleMinChange = (event) =>{
  setMinValue(parseInt(event.target.value))
}

const handleTimeChange = () =>{
  const totalTime = (minValue*60) + secValue;
  clearTimer(getDeadTime(totalTime))
}

return (
  <div
      style={{ textAlign: "center", margin: "auto" }}>
      <h2>{timer}</h2>
      <button onClick={onClickReset}>Reset</button>
      <input type='number'value={minValue} onChange={handleMinChange} placeholder='Minutes'/>
      <input type='number'value={secValue} onChange={handleSecChange} placeholder='Seconds'/>
      <button onClick={handleTimeChange}>Set Time</button>
  </div>
);

    
};


export default App;
