import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'


const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
    </Routes>
  </BrowserRouter>,
);
