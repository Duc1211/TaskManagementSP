import React, { useContext } from "react";
import { Col, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import EditTaskForm from "./EditTaskForm";
import AddTaskForm from "./AddTaskForm";

import { TasksContext } from "../../../context/TaskContext";
import { closeForm } from "../../../actions/tasks";

const TaskForm = () => {
  const { dispatchTasks, state } = useContext(TasksContext);
  const {isEdit} = state;

  const handleCloseForm = () => {
    dispatchTasks(closeForm());
  };
  return (
    <Col xl="4" sm="4" md="4" lg="4" className="px5">
      <div>
        <Alert variant="warning">
          <Alert.Heading as="h5">
            {isEdit ? "Sửa Công Việc" : "Thêm Công Việc"}
            <span>
              <FontAwesomeIcon
                icon="times-circle"
                className="float-right"
                onClick={handleCloseForm}
              />
            </span>
          </Alert.Heading>
        </Alert>
      </div>
      {isEdit ? <EditTaskForm /> : <AddTaskForm />}
    </Col>
  );
};

export default TaskForm;
