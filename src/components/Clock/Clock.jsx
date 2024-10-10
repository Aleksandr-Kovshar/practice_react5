import "./Clock.css";
// import React, { Component } from "react";

// class Clock extends Component {
//   state = {
//     time: new Date().toLocaleTimeString(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     console.log("setInterval");

//     this.intervalId = setInterval(
//       () => this.setState({ time: new Date().toLocaleTimeString() }),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     this.stop();
//   }

//   stop = () => {
//     clearInterval(this.intervalId);
//   };

//   render() {
//     return (
//       <>
//         <div className="Clock__face">{this.state.time}</div>
//         <button type="button" onClick={this.stop}>Остановить</button>
//       </>
//     );
//   }
// }

// export default Clock;

import { useState, useEffect, useRef } from "react";

function Clock() {
  const [time, setTime] = useState(() => new Date());

  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log("Это интевал каждые 1000мс" + Date.now());
      setTime(new Date());
    }, 1000);

    return () => {
      stop();
    };
    
  }, []);

  

  const stop = () => {
    clearInterval(intervalId.current);
  };
  console.log(intervalId);
  return (
    <>
      <div className="Clock__face">{time.toLocaleTimeString()}</div>
      <button type="button" onClick={stop}>
        Остановить
      </button>
    </>
  );
}

export default Clock;
