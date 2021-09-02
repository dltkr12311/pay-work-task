import React from "react";
import { Header, TodoList } from "components";

export const TodoScreen: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <TodoList />
    </React.Fragment>
  );
};
