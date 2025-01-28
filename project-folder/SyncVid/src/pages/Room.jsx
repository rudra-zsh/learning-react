import React from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import ChatSection from "../components/ChatSection";

const Room = () => {
  const { id: roomId } = useParams(); // Get the room ID from the URL

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Room: {roomId}</h1>
      <p>Here you can watch videos and chat with others in the same room.</p>

      {/* Video Player */}
      <VideoPlayer videoSrc="https://www.w3schools.com/html/mov_bbb.mp4" />

      {/* Chat Section */}
      <ChatSection roomId={roomId} />
    </div>
  );
};

export default Room;
