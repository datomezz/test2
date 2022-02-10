import logo from './logo.svg';
import './App.css';

function App() {
  const requestShit = () => {
    fetch("/api/test")
      .then(res => res.json())
      .then(data => console.log("data", data));
  }
  return (
    <div>
      <h1>World</h1>
      <div className="App">
        <button onClick={requestShit}>REQUEST</button>
      </div>
    </div>
  );
}

export default App;
