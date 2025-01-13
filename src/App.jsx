import { useState, memo, useCallback } from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";
import { use } from "react";

const App = memo(() => {
  console.log("rendered App");
  const [num, setNum] = useState(0);
  const onClickButton = () => {
    setNum(num + 1);
  };
  const onClickReset = useCallback(() => {
    setNum(0);
  } ,[]);
  return (
    <div>
      <button onClick={onClickButton}>button</button>
      <p>{num}</p>
      <Child1 onClickReset={onClickReset} />
      <Child4 />
    </div>
  );
});

App.displayName = "App";

export { App };