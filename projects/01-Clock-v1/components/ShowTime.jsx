import { useEffect } from "react";
import { useState } from "react";

function ShowTime() {
  // For todays date;
  Date.prototype.today = function () {
    return (
      (this.getDate() < 10 ? "0" : "") +
      this.getDate() +
      "/" +
      (this.getMonth() + 1 < 10 ? "0" : "") +
      (this.getMonth() + 1) +
      "/" +
      this.getFullYear()
    );
  };

  // For the time now
  Date.prototype.timeNow = function () {
    return (
      (this.getHours() < 10 ? "0" : "") +
      this.getHours() +
      ":" +
      (this.getMinutes() < 10 ? "0" : "") +
      this.getMinutes() +
      ":" +
      (this.getSeconds() < 10 ? "0" : "") +
      this.getSeconds()
    );
  };

//   var datetime = new Date().today() + " - " + new Date().timeNow();

  const [time,setTimeInv] = useState(new Date());
  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setTimeInv(new Date());
    },1000);

    return ()=>{
      clearInterval(intervalId);
    }

  })
  // var time = new Date();
  return (
    <div>
      <p>This is current time :{time.toLocaleDateString()} - {time.toLocaleTimeString()} </p>
    </div>
  );
}
export default ShowTime;
