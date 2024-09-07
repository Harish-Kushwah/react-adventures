import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";


function App() {
  var[expression,setExpression]=useState("");

  const onButtonClick = (event)=>{
    let newExp =expression;
    if(event.target.innerText==="="){
       newExp="solution";
    }
    else if(event.target.innerText==="C"){
        alert(newExp);
        newExp =expression;
        alert(newExp);

    }
    else{
      newExp = expression + event.target.innerText;
    }
    setExpression(newExp)
  }

  return <div className={styles.calculator} id="calculator">
    <Display onDisplay={expression}></Display>
    <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
  </div>
  
}

export default App
