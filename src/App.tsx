import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DetailPage from './pages/DetailPage/DetailPage';
import HomePage from './pages/HomePage/HomePage';
import getListDevice from './axios/getListDevice';

function App() {
  getListDevice();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
