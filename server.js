import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: "http://locahost:3000",
  })
);

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: "http://localhost:3000",
  // options
});

io.on("connection", (socket) => {
  console.log("Client Connected Id", socket.id);
  socket.on("beginPath", (args) => {
    socket.broadcast.emit("beginPath", args);
  });

  socket.on("drawing", (args) => {
    socket.broadcast.emit("drawing", args);
  });

  socket.on("changeConfig", (args) => {
    socket.broadcast.emit("changeConfig", args);
  });
});

httpServer.listen(5000);
