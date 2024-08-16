import React, { useReducer, useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TaskForm from "./components/Task/Form/Form";
import TaskTable from "./components/Task/Table";
import TaskControl from "./components/Task/Controls";

import TasksContextProvider from "./context/TaskContext";
import tasksReducer, { initialState } from "./reducers/tasks";
import { toggleForm, editForm } from "./actions/tasks";

import "./App.css";

function App() {
  const [state, dispatchTasks] = useReducer(tasksReducer, initialState);
  const [currentTask, setCurrentTask] = useState({
    id: null,
    task: "",
    status: true
  });
  const [keyword, setKeyword] = useState("");
  const { isShow, tasks } = state;

  let tasksList = tasks;

  if (keyword) {
    tasksList = tasksList.filter(task => {
      return task.task.toLowerCase().includes(keyword.toLowerCase());
    });
  }
  const onEditTask = task => {
    dispatchTasks(editForm());
    setCurrentTask(task);
  };
  const onSearchTask = keyword => {
    setKeyword(keyword);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleToggle = () => {
    dispatchTasks(toggleForm());
  };

  return (
    <TasksContextProvider
      value={{ dispatchTasks, state, onEditTask, currentTask, onSearchTask }}
    >
      <Container>
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <Row>
          {isShow && <TaskForm />}
          <Col
            xs={!isShow ? "12" : "8"}
            sm={!isShow ? "12" : "8"}
            md={!isShow ? "12" : "8"}
            lg={!isShow ? "12" : "8"}
          >
            <Button type="button" variant="primary" onClick={handleToggle}>
              <FontAwesomeIcon icon="plus" /> Thêm Công Việc
            </Button>
            <TaskControl />
            <TaskTable tasksList={tasksList} />
          </Col>
        </Row>
      </Container>
    </TasksContextProvider>
  );
}

export default App;
