import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import UsersPage from './pages/UsersPage/UsersPage';

function App() {
  

  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/users' element={<UsersPage /> }/>
        </Routes>
      </div>
    </>
  );
}

export default App;
