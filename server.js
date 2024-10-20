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
  console.log("Server Connected");
});

httpServer.listen(5000);
