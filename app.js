import express from "express";
import { getEmployee, getEmployees, getRandomEmployee } from "#db/employees";
import employeesRouter from "#api/employees";

const app = express();
export default app;

app.use(express.json()); //body parsing


app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.use("/employees", employeesRouter);


app.use((err, req, res, next) => {
  res.status(500).send("Database error occurred");
});
