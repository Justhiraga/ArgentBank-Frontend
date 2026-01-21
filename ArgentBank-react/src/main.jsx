import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import SignIn from './pages/Sign-in.jsx'
import User from './pages/User.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'


const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/user" element={<User />} />
    </Routes>
  </BrowserRouter>,
);
