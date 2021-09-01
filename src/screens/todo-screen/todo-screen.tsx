import React, { useState } from "react";
import { Header, TodoList } from "components";

export const TodoScreen: React.FC = () => {
  const [textValue, setTextValue] = useState<string>("");

  return (
    <React.Fragment>
      <Header />
      <TodoList />
    </React.Fragment>
  );
};
