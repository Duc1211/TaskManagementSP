import React, { useContext, useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { TasksContext } from "../../../context/TaskContext";
import { aToZ, zToA } from "../../../actions/tasks";

const TaskSortControl = () => {
  const { dispatchTasks } = useContext(TasksContext);
  const [isCheck, setIsCheck] = useState(null);

  const ascending = () => {
    dispatchTasks(aToZ());
    setIsCheck(true);
  };

  const descending = () => {
    dispatchTasks(zToA());
    setIsCheck(false);
  };

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="Sắp sếp"
      data-toggle="dropdown"
    >
      <Dropdown.Item onClick={ascending}>
        <FontAwesomeIcon icon="sort-alpha-down" /> Tên A-Z{" "}
        {isCheck === true && <FontAwesomeIcon icon="check" />}
      </Dropdown.Item>
      <Dropdown.Item onClick={descending}>
        <FontAwesomeIcon icon="sort-alpha-up" /> Tên Z-A{" "}
        {isCheck === false && <FontAwesomeIcon icon="check" />}
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default TaskSortControl;
