import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AltaAutobuses from '../pages/AltaAutobuses.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/altaautobuses' element={<AltaAutobuses />} />
        <Route path='/register' element={<Register/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
