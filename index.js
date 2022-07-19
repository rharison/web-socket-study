import { Server } from "socket.io";

const io = new Server(4444, {cors: {origin: "*"}});
let i =0;
setInterval(() => {
  io.emit("locations", "JAMIIIIL"+ i++);
}, 5000)