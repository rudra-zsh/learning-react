import React, { useRef } from "react";

const VideoPlayer = ({ videoSrc, onControl }) => {
  const videoRef = useRef();

  const handleControl = (action) => {
    const video = videoRef.current;
    if (!video) return;

    switch (action) {
      case "play":
        video.play();
        break;
      case "pause":
        video.pause();
        break;
      case "forward":
        video.currentTime += 10;
        break;
      case "backward":
        video.currentTime -= 10;
        break;
      default:
        break;
    }
    if (onControl) {
      onControl(action, video.currentTime);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <video ref={videoRef} src={videoSrc} controls style={{ width: "80%" }} />
      <div>
        <button onClick={() => handleControl("play")}>Play</button>
        <button onClick={() => handleControl("pause")}>Pause</button>
        <button onClick={() => handleControl("forward")}>Forward 10s</button>
        <button onClick={() => handleControl("backward")}>Rewind 10s</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
