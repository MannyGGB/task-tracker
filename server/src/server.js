import cors from "cors";
import express from "express";

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
