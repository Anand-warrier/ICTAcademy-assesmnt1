
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Employee_Form from './components/Employee_Form';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Routes>
        <Route path="view" element={<Home/>}/>
        <Route path="add" element={<Employee_Form/>}/>
      </Routes>

    </div>
  );
}

export default App;
