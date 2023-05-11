import './App.css';
import Login from './components/Login/Login';
import Clock from './components/Mainpage/Clock/Clock';
import Navbar from './components/Mainpage/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Clock />
    </div>
  );
}

export default App;
