import Header from "./components/Header"
import Card from "./components/Card"
import Button from "./components/Button"

function App() {
  const [counter, setCounter] = useState(1)

  return (
    <div className="App">
      <div className="chart">


        <Header />
        <Card />
        <Button />
      </div>


    </div>
  );
}

export default App;
