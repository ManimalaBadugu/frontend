
import './App.css';
// import Navbar from './components/navbar';
// import Searchbar from './components/searchbar';
import Login from './components/login';
import Signup from './components/signup';
import { BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from './components/homePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path='/' Component={Login}></Route>
                <Route path="/signup" Component={Signup}></Route>
                <Route path='/home' Component={HomePage}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
