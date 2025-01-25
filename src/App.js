import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import UsersPage from './pages/UsersPage/UsersPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
  

  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/users' element={<UsersPage /> }/>
          <Route path='/profile/:id' element={<ProfilePage /> }/>
        </Routes>
      </div>
    </>
  );
}

export default App;
