import "./App.css";
import { Routes, Route } from "react-router-dom";
import TaskCard from "./components/TaskCard";
import TaskForm from "./components/TaskForm";
import UpdateForm from "./components/UpdateForm";
import Dock from "./components/Dock";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TaskCard />} />
        <Route path="newTask" element={<TaskForm />} />
        <Route path="updateTask/:idParams" element={<UpdateForm />} />
      </Routes>
      <Dock />
    </>
  );
}
