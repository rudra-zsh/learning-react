import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  const joinRoom = () => {
    if (roomId.trim() !== "") {
      navigate(`/room/${roomId}`);
    }
  };

  return (
    <div className="container center">
      <h1>Welcome to the Video Sharing App</h1>
      <input
        type="text"
        placeholder="Enter Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <button onClick={joinRoom}>Join Room</button>
    </div>
  );
};

export default Home;
