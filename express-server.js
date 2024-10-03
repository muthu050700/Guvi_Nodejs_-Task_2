import express from "express";
import roomRouter from "./router/room.js";
import regularCustomer from "./router/regularCustomer.js";

const server = express();

server.use(express.json());

server.use("/room", roomRouter);
server.use("/regularcustomer", regularCustomer);
const PORT = 4500;

server.listen(PORT, () => {
  console.log("The server is running on", PORT);
});
