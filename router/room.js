import express from "express";
import { allBookingData, allCustomersData, rooms } from "./local-memory.js";
import { v4 } from "uuid";

const roomRouter = express.Router();

//Get all the rooms
roomRouter.get("/", (req, res) => {
  res.json(rooms); // response of all rooms
});

//Create a new room
roomRouter.post("/", (req, res) => {
  const roomData = req.body;

  rooms.push({
    id: v4(), // generating random id
    aadharNumer: v4(),
    bookingStatus: "Not booked",
    ...roomData,
    booking: [],
  });
  res.status(201).json({ msg: "Room created successfully" });
});

//Booking a room
roomRouter.post("/:id/booking", (req, res) => {
  const id = req.params.id;

  const bookingData = req.body;

  const bookingIndex = rooms.findIndex((r) => r.id === id); // finding the index of room

  if (bookingIndex !== -1) {
    rooms[bookingIndex].booking.push({
      roomId: v4(),
      ...bookingData,
    });

    rooms[bookingIndex].bookingStatus = "Room Booked";
    res.status(201).json({ msg: "Room booked successfully" });
  } else {
    res.status(404).json({ msg: "Room data not found" });
  }
});

//List all rooms with booked data

roomRouter.get("/bookedData", (req, res) => {
  rooms.forEach((data, index) => {
    const bookingStatus = data.bookingStatus;
    if (bookingStatus.toLowerCase() === "room booked") {
      //checking wheather the room is booked or not
      const { customer_name, date, start_time, End_time } = data.booking[0];

      allBookingData.push({
        roomName: index + 1,
        customer_name,
        date,
        start_time,
        End_time,
        bookingStatus,
      });
    }
  });
  res.json(allBookingData);
});

//list all customers with booked data

roomRouter.get("/customers/bookedData", (req, res) => {
  rooms.forEach((data, index) => {
    const bookingStatus = data.bookingStatus;
    if (bookingStatus.toLowerCase() === "room booked") {
      //checking wheather the room is booked or not

      const { customer_name, date, start_time, End_time } = data.booking[0];

      allCustomersData.push({
        roomName: index + 1,
        customer_name,
        date,
        start_time,
        End_time,
      });
    }
  });
  res.json(allCustomersData);
});

export default roomRouter;
