import logo from './logo.svg';
import Ripples from 'react-ripples';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click on the ripple button to change its label.
        </p>
        <Ripples>
            <button id="Button" onClick={ChangeText}>Rename me!</button>
        </Ripples>
      </header>
    </div>
  );
}

function ChangeText() {
  var btn = document.getElementById("Button");
  var inputString = "";
  btn.focus();
  document.addEventListener("keydown", function(event) {
    inputString += event.key;
    btn.innerHTML = inputString;
  });
}

export default App;
