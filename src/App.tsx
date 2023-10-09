import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BuatNotesPage from './pages/BuatNotespage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/buatnotes' Component={BuatNotesPage}></Route>
      </Routes>
    </Router>
  )
}

export default App
