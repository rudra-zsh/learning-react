// ChatSection.jsx
import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

// Create a single socket connection with infinite timeout
const socket = io("http://localhost:3000", {
  transports: ["websocket"],  // Force WebSocket transport
  reconnection: true,         // Auto-reconnect on disconnection
  reconnectionAttempts: Infinity, // Keep trying forever
  timeout: 2147483647,        // Effectively infinite connection timeout
});

const ChatSection = ({ roomId }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!roomId) {
      console.error("[DEBUG] Room ID is undefined!");
      return;
    }

    // Attempt to join the specified room
    console.log(`[DEBUG] Attempting to join room: ${roomId}`);
    socket.emit("join_room", roomId);

    // Debug logs for connection lifecycle
    socket.on("connect", () => {
      console.log(`[DEBUG] Connected to server with ID: ${socket.id}`);
    });

    socket.on("connect_error", (err) => {
      console.error("[DEBUG] Connection error:", err.message);
    });

    socket.on("disconnect", (reason) => {
      console.warn(`[DEBUG] Disconnected from server. Reason: ${reason}`);
    });

    // Listen for incoming messages
    socket.on("receive_message", (data) => {
      console.log("[DEBUG] Received message:", data.message);
      setMessages((prev) => [...prev, { text: data.message, sender: data.sender }]);
    });

    // Cleanup on unmount
    return () => {
      console.log("[DEBUG] Socket disconnecting...");
      socket.disconnect();
    };
  }, [roomId]);

  // Send message to backend
  const handleSend = () => {
    if (input.trim() === "") return;

    socket.emit("send_message", { roomId, message: input });
    // Add locally so current user sees it immediately
    setMessages((prev) => [...prev, { text: input, sender: "You" }]);
    setInput("");
  };

  // Handle the Enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <h2>Chat Section</h2>
      <div
        style={{
          margin: "0 auto",
          width: "80%",
          height: "200px",
          overflowY: "scroll",
          border: "1px solid #ccc",
          borderRadius: "5px",
          backgroundColor: "#f9f9f9",
          textAlign: "left",
          padding: "10px"
        }}
      >
        {messages.map((msg, idx) => (
          <p key={idx} style={{ margin: "5px 0" }}>
            <strong>{msg.sender === "You" ? "You" : `User ${msg.sender}`}:</strong> {msg.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Type your message..."
        style={{ width: "70%", marginRight: "10px", padding: "5px" }}
      />
      <button onClick={handleSend} style={{ padding: "5px 10px" }}>
        Send
      </button>
    </div>
  );
};

export default ChatSection;
