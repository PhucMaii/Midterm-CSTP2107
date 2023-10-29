import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import QuizPage from './pages/QuizPage/QuizPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/home/quiz/:category" element={<QuizPage />}/>
    </Routes>
  )
}

export default App
