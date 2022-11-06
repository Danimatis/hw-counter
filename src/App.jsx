import "./App.css";
import Counter from "./components/counter";
import Counter2 from "./components/counter-with-array";
function App() {
  return (
    <div>
      <Counter></Counter>
      <br />
      <br />
      <br />
      <br />
      <Counter2 boundaries={[{ from: 15, to: 10, color: "red" }]}></Counter2>
    </div>
  );
}

export default App;
