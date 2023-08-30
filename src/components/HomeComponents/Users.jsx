import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Pagination from "@mui/material/Pagination";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { formatDate } from "../../helpers/formatDate";
export default function Users() {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState([]);
  async function fetchUsers(params = 0) {
    try {
      const response = await fetch(`https://test.relabs.ru/api/users/list?offset=${params}`);
      const data = await response.json();
      setUsers(data.items);
      setData(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  useEffect(() => {
    fetchUsers();
  }, []);

 
  const [page, setPage] = React.useState(1);
  const getPortionUsers = (event, value) => {
    setPage(value);
    fetchUsers((value - 1) * data.limit);
  };
  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };
  
  return (
    <div>
      <List sx={{ width: "50vw", padding: "20px" }}>
        <h2> Список пользователей</h2>
        <ListItem disableGutters sx={{ borderBottom: "1px solid grey" }}>
          <ListItemText primary={`ID`} />
          <ListItemText primary={`Имя`} />
          <ListItemText primary={`Роль`} />
          <ListItemText primary={`Дата создания `} />
          <ListItemText primary={`Действия `} />
        </ListItem>

        {!users.length ? (
          <div>loader...</div>
        ) : (
          users.map((user) => (
            <ListItem key={user.id} disableGutters sx={{ borderBottom: "1px solid grey" }}>
              <ListItemText primary={user.id} />
              <ListItemText primary={user.name} />
              <ListItemText primary={user.role} />
              <ListItemText primary={formatDate(user.ctime)} />
              <Button
                variant="contained"
                sx={{ backgroundColor: "red" }}
                onClick={() => {
                  deleteUser(user.id);
                }}
              >
                Удалить
              </Button>
            </ListItem>
          ))
        )}
      </List>
      <Pagination count={3} page={page} onChange={getPortionUsers} />
    </div>
  );
}
