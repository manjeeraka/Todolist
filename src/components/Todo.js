import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React, {useState, useEffect} from "react";
import './todo.css';
import cx from 'classnames';

function Todo({ todo, toggleComplete, removeTodo , toggleStatus}) {
  const [status, setStatus] = useState('');

  useEffect(() => {
    setStatus(todo.status);
  },[])
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  const handleSelect = event => {
    setStatus(event.target.value);
    toggleStatus(todo.id, event.target.value);
  }


  return (
    <ListItem style={{ display: "flex" }}>
      
      <div className={cx({'status-new': todo.status == 'new'}, {'status-finished' : todo.status == 'finished'}, {'status-giveup': todo.status == 'giveup'})}>
      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null
        }}
      >
        {todo.task}
      </Typography>
      </div>
      <select name="status" onChange={handleSelect} value={status}>
  <option >Select status</option>
  <option value="new">New</option>
  <option value="finished">Finished</option>
  <option value="giveup" >Giveup</option>

  </select>
  
      <IconButton onClick={handleRemoveClick}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
}

export default Todo;
