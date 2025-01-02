import React, { useEffect, useState } from "react";
import socket from "../services/socket"; // Import the WebSocket service

const RealTimeComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Listen for events from the server
    socket.on("update", (newData) => {
      setData(newData);
    });

    // Clean up the connection when the component unmounts
    return () => {
      socket.off("update");
    };
  }, []);

  return (
    <div>
      <h1>Real-Time Data</h1>
      <p>{data ? JSON.stringify(data) : "Waiting for updates..."}</p>
    </div>
  );
};

export default RealTimeComponent;
