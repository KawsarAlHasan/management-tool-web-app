import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Pages/Shared/Navbar';
import About from './Pages/About/About';
import CompletedTasks from './Pages/CompletedTasks/CompletedTasks';
import ToDo from './Pages/ToDo/ToDo';
import Calendar from './Pages/Calendar/Calendar';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Shared/Login/Login';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ToDo />} />
        <Route path="completedTasks" element={<CompletedTasks />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
