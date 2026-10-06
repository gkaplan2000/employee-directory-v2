import express from "express";
import { getEmployee, getEmployees, getRandomEmployee, createEmployee} from "#db/employees";

const router = express.Router();


router.route("/").get((req, res) => {
    const employees = getEmployees();
    res.send(employees);
}).post((req, res) => {
    if(!req.body){return res.status(400).send("Request must have a body.")}
    
    const {name} = req.body;

    if(!name){return res.status(400).send("Name not provided correctly.")}
    return res.status(201).send(createEmployee(name));
})

router.route("/random").get((req, res) => {
    const employee = getRandomEmployee();
    res.send(employee);
})

router.route("/:id").get((req, res) => {
    const { id } = req.params;

    const employee = getEmployee(+id);

    if (!employee) {
        return res.status(404).send(`Employee #${id} not found.`);
    }

    res.send(employee);
})

export default router;