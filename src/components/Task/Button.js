import React from "react";
import Button from "react-bootstrap/Button";

const TaskButton = ({
  children,
  isEdit,
  size = "sm",
  variant = "primary",
  ...props
}) => {
  if (isEdit) {
    return (
      <Button variant={variant} disabled size={size} {...props}>
        {children}
      </Button>
    );
  }

  return (
    <Button variant={variant} size={size} {...props}>
      {children}
    </Button>
  );
};

export default TaskButton;
