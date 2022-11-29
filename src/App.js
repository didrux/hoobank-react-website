import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, this is my React app
        </p>
        <a
          className="App-link"
          href="https://t.me/uahcurrency_bot"
          target="_blank"
          rel="noopener noreferrer"
        >
          Currency Bot
        </a>
      </header>
    </div>
  );
}

export default App;
