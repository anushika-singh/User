import './App.css';
import Header from './component/Header/header';
import Home from './views/Home/Home';
import LoginPage from './views/LoginPage/LoginPage';
import RegisterPage from './views/RegisterPage/RegisterPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserProfile from './views/UserProfile/UserProfile';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/userProfile' element={<UserProfile />} />
      </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
