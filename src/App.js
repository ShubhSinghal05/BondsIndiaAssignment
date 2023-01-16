import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Payment from './components/Payment';
import { ContextTokenFunction } from './GlobalContext/ContextFun';

function App() {

  return (
    <ContextTokenFunction>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productDescription" element={<Payment />} />
      </Routes>
    </BrowserRouter>
    </ContextTokenFunction>
    
  );
}

export default App;
