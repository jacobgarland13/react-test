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
            <button id="Button" onclick="ChangeText()">Rename me!</button>
        </Ripples>
      </header>
      <script>
      { 'function ChangeText() { var btn = document.getElementById("Button"); btn.innerHTML = "You touched me!";}' }
      </script>
    </div>
  );
}

export default App;
