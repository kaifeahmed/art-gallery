import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.js';
import Home from './components/Home.js';
import { AuthProvider } from './contexts/AuthContext.js';
import { Toaster } from 'react-hot-toast';
function App() {  return (
    <>
    <Toaster/>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
