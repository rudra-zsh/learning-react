// server.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
// Allow cross-origin requests (adjust if needed)
app.use(cors());

// Create an HTTP server from the Express app
const server = http.createServer(app);

// Initialize Socket.IO with infinite-ish ping timeout
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Frontend URL
    methods: ["GET", "POST"],
    credentials: true,
  },
  pingTimeout: 2147483647, // Very large value (~24.8 days)
  pingInterval: 60000,     // Ping every 60 seconds
});

// --- Socket.IO Events ---

io.on("connection", (socket) => {
  console.log(`[DEBUG] New client connected: ${socket.id}`);

  // Join room event
  socket.on("join_room", (roomId) => {
    console.log(`[DEBUG] Socket ${socket.id} joined room: ${roomId}`);
    socket.join(roomId);
  });

  // Send message event
  socket.on("send_message", (data) => {
    const { roomId, message } = data;
    console.log(`[DEBUG] Message received in room '${roomId}': ${message}`);
    // Broadcast to all in the same room
    io.to(roomId).emit("receive_message", { message, sender: socket.id });
  });

  // Disconnect event
  socket.on("disconnect", (reason) => {
    console.log(`[DEBUG] Socket ${socket.id} disconnected. Reason: ${reason}`);
  });

  // Connection error event
  socket.on("connect_error", (err) => {
    console.error(`[DEBUG] Connection error for socket ${socket.id}: ${err.message}`);
  });
});

// --- Start Server ---

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`[DEBUG] Server running on http://localhost:${PORT}`);
});
