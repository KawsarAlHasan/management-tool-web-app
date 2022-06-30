import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import CompletedTasks from './Pages/CompletedTasks/CompletedTasks';
import ToDo from './Pages/ToDo/ToDo';
import Calendar from './Pages/Calendar/Calendar';

function App() {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="completedTasks" element={<CompletedTasks />} />
        <Route path="toDo" element={<ToDo />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="about" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
