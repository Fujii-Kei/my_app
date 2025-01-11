export const App = () => {
  const onClickButton = () => {
    alert('button clicked');
  };
  const contentStyle = {
    color: 'blue',
    fontSize: '24px',
  };
  return (
    <div>
      <h1 id="message">Hello World!!!</h1>
      <p style={contentStyle}>This is a sample paragraph in blue.</p>
      <button onClick={onClickButton}>button</button>
    </div>
  );
};