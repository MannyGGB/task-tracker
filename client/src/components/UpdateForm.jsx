import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { dateFormatter } from "../utils/functions";

export default function UpdateForm() {
  const params = useParams();
  const id = params.id;

  const [task, setTask] = useState([]);

  useEffect(() => {
    async function fetchTask() {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_GET_TASK_URL}/${id}`
      );
      const data = await response.json();
      setTask(data[0]);
    }
    fetchTask();
  }, [id]);

  async function handleSubmit(formData) {
    "use server";
    const formValues = {
      task_title: formData.get("task_title"),
      task_description: formData.get("task_description"),
      task_status: formData.get("task_status"),
      task_due_date: formData.get("task_due_date"),
    };

    await fetch(`${import.meta.env.VITE_SERVER_UPDATE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formValues }),
    });
  }

  return (
    <div>
      <form action={handleSubmit} className="flex flex-col items-center">
        <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
          <legend className="fieldset-legend">Edit this task</legend>

          <label className="fieldset-label">Task title: </label>
          <input
            type="text"
            className="input"
            placeholder="Write the name of the task"
            name="task_title"
            defaultValue={task.task_title}
            required
          />

          <label className="fieldset-label">Task description: </label>
          <input
            type="text"
            className="input"
            placeholder="Optional"
            name="task_description"
            defaultValue={task?.task_description}
          />
          <label className="fieldset-label">Task status: </label>
          <select
            value={task.task_status}
            className="select"
            name="task_status"
            required
          >
            <option disabled={true}>Pick a status</option>
            <option>To do</option>
            <option>Doing</option>
            <option>Block</option>
            <option>Done</option>
          </select>
          <label className="fieldset-label">Task due date: </label>
          <input
            type="date"
            className="input"
            placeholder="Pick a due date"
            name="task_due_date"
            value={task.task_due_date}
          />
        </fieldset>
        <button
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl p-2 m-2 hover:bg-fuchsia-600 cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
