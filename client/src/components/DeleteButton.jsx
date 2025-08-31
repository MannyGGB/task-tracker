import { useNavigate } from "react-router-dom";

export default function DeleteButton({ id }) {
  const navigate = useNavigate();

  function handleDelete(id) {
    fetch(`${import.meta.env.VITE_SERVER_DELETE_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/newTask");
  }

  return (
    <button
      onClick={() => handleDelete(id)}
      className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl p-2 m-2 hover:bg-red-600 cursor-pointer"
      type="submit"
    >
      Delete
    </button>
  );
}
