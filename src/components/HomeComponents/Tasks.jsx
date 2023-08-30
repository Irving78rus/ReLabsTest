import React from "react";
import WebSocket from "websocket";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useState, useEffect } from "react";
import { formatDate } from "../../helpers/formatDate";
const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const socket = new WebSocket.w3cwebsocket("wss://test.relabs.ru/event");

    socket.onopen = () => {
      console.log("WebSocket connection established");
    };

    socket.onmessage = (event) => {
      setTasks((prev) => [...prev, JSON.parse(event.data)]);
    };

    socket.onclose = (event) => {
      if (event.wasClean) {
        console.log(
          `WebSocket connection closed cleanly, code=${event.code}, reason=${event.reason}`
        );
      } else {
        console.error("WebSocket connection died");
      }
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      socket.close();
    };
  }, []);
  
  return (
    <div>
      <List sx={{ width: "50vw", padding: "20px" }}>
        <h2> События </h2>
        <ListItem disableGutters sx={{ borderBottom: "1px solid grey" }}>
          <ListItemText primary={`Дата`} />
          <ListItemText primary={`Событие`} />
        </ListItem>

        {!tasks.length ? (
          <div>loader...</div>
        ) : (
          tasks.map((task) => (
            <ListItem key={task.ctime} disableGutters sx={{ borderBottom: "1px solid grey" }}>
              <ListItemText primary={formatDate(task.ctime)} />
              <ListItemText primary={task.event} />
            </ListItem>
          ))
        )}
      </List>
    </div>
  );
};

export default Tasks;
