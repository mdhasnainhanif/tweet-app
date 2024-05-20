// src/App.js
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Tweets from './pages/Tweets';
import AddTweet from './pages/AddTweet';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/' element={<PrivateRoute><Home/></PrivateRoute>}/>
            <Route path='/tweets' element={<PrivateRoute><Tweets/></PrivateRoute>}/>
            <Route path='/add-tweet' element={<PrivateRoute><AddTweet/></PrivateRoute>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
