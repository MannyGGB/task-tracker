import { Link } from "react-router-dom";
export default function UpdateButton({ id }) {
  return (
    <button
      className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl p-2 m-2 hover:bg-sky-400 cursor-pointer"
      type="submit"
    >
      <Link to={`/updateTask/${id}`}>Update</Link>
    </button>
  );
}
