
import './App.css'
import { Route, Routes } from 'react-router'
import LoginPage from './pages/LoginPage/LoginPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  )
}

export default App
