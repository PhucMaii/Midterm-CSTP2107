import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import QuizPage from './pages/QuizPage/QuizPage';
import SearchPage from './pages/SearchPage/SearchPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/quiz/:category" element={<QuizPage />}/>
      <Route path="/search" element={<SearchPage />}/>
    </Routes>
  )
}

export default App
