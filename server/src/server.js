import cors from "cors";
import express from "express";
import { db } from "./db/dbConnection.js";

const app = express();

app.use(express.json());
app.use(cors());
const PORT = 8080;

app.listen(PORT, (error) => {
  if (error) return console.error(error);
  return console.log(`Server is running in ${PORT}`);
});

app.get("/", (_, res) => {
  res.send("This is the root route");
});

app.get("/allTasks", async (_, res) => {
  try {
    const query = await db.query(`SELECT * FROM tasks`);
    const tasks = query.rows;
    res.json(tasks);
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Network error or invalid response:", error.message);
    } else if (error.message.includes("HTTP error!")) {
      console.error("API responded with an error:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
  }
});

app.post("/insertTask", async (req, res) => {
  try {
    const body = req.body.formValues;
    const query = await db.query(
      `INSERT INTO tasks (task_title, task_description, task_status, task_due_date) VALUES ($1, $2, $3, $4) RETURNING *`,
      [
        body.task_title,
        body.task_description,
        body.task_status,
        body.task_due_date,
      ]
    );
    res.json(query.rows);
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Network error or invalid response:", error.message);
    } else if (error.message.includes("HTTP error!")) {
      console.error("API responded with an error:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
  }
});

app.put("/updateTask/:id", async (req, res) => {
  try {
    const body = req.body.formValues;
    const params = req.params.id;
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Network error or invalid response:", error.message);
    } else if (error.message.includes("HTTP error!")) {
      console.error("API responded with an error:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
  }
});

app.delete("/deleteTask/:id", async (req, res) => {
  try {
    const params = req.params.id;
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Network error or invalid response:", error.message);
    } else if (error.message.includes("HTTP error!")) {
      console.error("API responded with an error:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
  }
});
