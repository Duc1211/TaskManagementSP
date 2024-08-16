import React, { createContext } from "react";

export const TasksContext = createContext(null);

export default function TasksContextProvider({ children, ...props }) {
  return <TasksContext.Provider {...props}>{children}</TasksContext.Provider>;
}
