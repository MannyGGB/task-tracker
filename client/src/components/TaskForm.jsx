import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TaskForm() {
  const navigate = useNavigate();
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    async function fetchStaff() {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_GET_STAFF_URL}`
      );
      const data = await response.json();
      setStaff(data);
    }
    fetchStaff();
  }, []);

  async function handleSubmit(formData) {
    "use server";
    const formValues = {
      task_title: formData.get("task_title"),
      task_description: formData.get("task_description"),
      task_status: formData.get("task_status"),
      staff_id: formData.get("staff_id"),
      task_due_date: formData.get("task_due_date"),
    };

    await fetch(`${import.meta.env.VITE_SERVER_POST_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formValues }),
    });
    navigate("/");
  }

  return (
    <div>
      <form action={handleSubmit} className="flex flex-col items-center">
        <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
          <legend className="fieldset-legend">Add a new task</legend>

          <label className="fieldset-label">Task title: </label>
          <input
            type="text"
            className="input"
            placeholder="Write the name of the task"
            name="task_title"
            required
          />

          <label className="fieldset-label">Task description: </label>
          <input
            type="text"
            className="input"
            placeholder="Optional"
            name="task_description"
          />
          <label className="fieldset-label">Task status: </label>
          <select
            defaultValue="Pick a status"
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
          <label className="fieldset-label">Organiser: </label>
          <select
            defaultValue="Pick an organiser"
            className="select"
            name="staff_id"
            required
          >
            <option disabled={true}>Pick an organiser</option>
            {staff.map((member) => (
              <option key={member.id} value={member.id}>
                {member.staff_name}
              </option>
            ))}
          </select>
          <label className="fieldset-label">Task due date: </label>
          <input
            type="date"
            className="input"
            placeholder="Pick a due date"
            name="task_due_date"
            required
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
