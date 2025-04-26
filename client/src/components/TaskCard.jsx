import { useState, useEffect } from "react";
import { dateFormatter } from "../utils/functions";
// import { capitalise } from "../utils/functions";

export default function TaskCard() {
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      const response = await fetch(`${import.meta.env.VITE_SERVER_GET_URL}`);
      const data = await response.json();
      setAllTasks(data);
    }
    fetchTasks();
  }, []);

  return (
    <section className="flex flex-col items-center">
      {allTasks.map((task) => (
        <div
          key={task.id}
          className="card-lg border-2  border-fuchsia-600 rounded-md bg-base-100 w-96 shadow-sm m-4"
        >
          <article className="card-body card-border">
            <h2 className="card-title">{task.task_title}</h2>
            <p>{task.task_description}</p>
            <p>{task.task_status}</p>
            <p>{dateFormatter(task.task_due_date)}</p>
          </article>
        </div>
      ))}
    </section>
  );
}
