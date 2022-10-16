import Header from "./components/Header"
import Card from "./components/Card"
import Button from "./components/Button"
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(1)
  const handleClick = (e) => {
    if (e.target.value === "Next") {
      if (count >= 0 && count <= 11) {
        setCount(count + 5)
      }
      else if (count >= 15) {
        setCount(1)
      }
    }

    if (e.target.value === "Prew") {
      if (count > 1) {
        setCount(count - 5)
      }
      if (count <= 1) {
        setCount(16)
      }
    }
    console.log(count);
  }

  return (
    <div className="App">
      <div className="chart">
        <Header count={count} />
        <Card count={count} />
        <Button click={handleClick} />
      </div>


    </div>
  );
}

export default App;
