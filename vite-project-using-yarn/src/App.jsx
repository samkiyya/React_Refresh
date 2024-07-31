import "./App.css";
import RandomImage from "./RandomImage";

function App() {
  const now = new Date().toLocaleTimeString();
  const nowdate = new Date().toString();
  return (
    <>
      <div>
        <h1>3+9 = {3 + 9}</h1>
        <p>Current time: {now}</p>
        <p>Current date: {nowdate}</p>
      </div>
      <RandomImage /> <RandomImage /> <RandomImage /> <RandomImage />{" "}
    </>
  );
}

export default App;
