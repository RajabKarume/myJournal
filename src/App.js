import './App.css';
import SignUp from './components/Login/SignUp';
import MainPage from './components/Mainpage/Display/MainPage';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from './components/Login/Login';

function App() {

 

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/login"} element={<Login/>}  />
          <Route path={"/signup"} element={<SignUp/>}  />
          <Route path={'/'} element={ <MainPage/> } />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;