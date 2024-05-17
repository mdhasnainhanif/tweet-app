import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Tweets from './pages/Tweets';
import AddTweet from './pages/AddTweet';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/tweets' element={<Tweets/>}/>
            <Route path='/add-tweet' element={<AddTweet/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
