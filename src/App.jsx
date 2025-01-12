import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  const onClickButton = () => {
    setNum(num + 1);
    setNum(num + 1);
    setNum2(prev => prev + 1);
    setNum2(prev => prev + 1);
  };
  return (
    <div>
      <h1 id="message">Hello World!!!</h1>
      <ColoredMessage color="blue">How are you?</ColoredMessage>
      <ColoredMessage color="pink">I am fine.</ColoredMessage>
      <button onClick={onClickButton}>button</button>
      <p>{num}</p>
      <p>{num2}</p>
    </div>
  );
};