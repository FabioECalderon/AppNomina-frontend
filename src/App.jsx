import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Button } from './components/ui/button';

import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <>
      <p className="text-2xl font-bold underline">
        Placeholder Frontend App nomina with Tailwind
      </p>
      <Button>Click me</Button>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
