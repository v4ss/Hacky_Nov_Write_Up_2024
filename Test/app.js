const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Configurer Socket.IO pour écouter les connexions entrantes
io.on("connection", (socket) => {
  console.log("A client connected");

  const flag = "HN0x03{toto}";
  // Émettez un message à un client spécifique via Socket.IO
  socket.emit("flag", flag);

  // Gérer les déconnexions des clients
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// Lancez le serveur
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
