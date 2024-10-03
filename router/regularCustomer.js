import express from "express";
import { regularCustomerData } from "./local-memory.js";
import { v4 } from "uuid";
const regularCustomer = express.Router();

//Create a regular customer
regularCustomer.post("/", (req, res) => {
  const data = req.body;

  regularCustomerData.push({
    bookingId: v4(),
    ...data,
  });
  res.status(201).json({ msg: "created a data for regular customer" });
});

//get all the regular customer
regularCustomer.get("/:id/customer", (req, res) => {
  const id = req.params.id;
  const result = []; //storing regular customer data

  regularCustomerData.map((c) => {
    if (c.permanentNumber === id) {
      result.push(c);
    }
  });
  res.json(result);
});

export default regularCustomer;
