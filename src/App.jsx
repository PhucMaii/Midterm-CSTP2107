import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import QuizPage from './pages/QuizPage/QuizPage';
import SearchPage from './pages/SearchPage/SearchPage';
import { useEffect, useState } from 'react';
import { Typography } from 'antd';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const { Title } = Typography;

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [window.innerWidth])

  return (
    <>
       
      {
        width > 800 ? (
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Title>We only support screen size under 800px</Title>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/quiz/:category" element={<QuizPage />}/>
            <Route path="/search" element={<SearchPage />}/>
          </Routes>

        )
      }

    </>
   
  )
}

export default App
