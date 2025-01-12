import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  const onClickButton = () => {
    alert('button clicked');
  };
  return (
    <div>
      <h1 id="message">Hello World!!!</h1>
      <ColoredMessage color="blue">How are you?</ColoredMessage>
      <ColoredMessage color="pink">I am fine.</ColoredMessage>
      <button onClick={onClickButton}>button</button>
    </div>
  );
};