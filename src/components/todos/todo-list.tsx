import React, { useEffect } from "react";
import { View, Text, TextStyle, ViewStyle, FlatList } from "react-native";
import { TodoListItem, TodoTypes } from "components";
import { palette } from "theme";
import { TodoAddTaskBar } from "./todo-add-task";
import { AddTodoModal } from "./modal";
import { useSelector } from "react-redux";
import { RootState } from "store/reducers";

export interface ITodoList extends TodoTypes {}

export const TodoList: React.FC = () => {
  const showModal = useSelector((state: RootState) => state.modals.showModal);
  const todoItems = useSelector((state: RootState) => state.todos);

  return (
    <>
      <View style={ROOT}>
        <FlatList<ITodoList>
          data={Object.values(todoItems)}
          renderItem={({ item }) => <TodoListItem item={item} />}
          keyExtractor={(item) => item && item.id.toString()}
          ListEmptyComponent={
            <View style={LIST_EMPTY_VIEW}>
              <Text style={LIST_EMPTY_TEXT}>Task가 없습니다.</Text>
            </View>
          }
        />
        <TodoAddTaskBar />
        {showModal && <AddTodoModal />}
      </View>
    </>
  );
};

const ROOT: ViewStyle = {
  flex: 1,
};

const LIST_EMPTY_VIEW: ViewStyle = {
  alignItems: "center",
  marginTop: 100,
};
const LIST_EMPTY_TEXT: TextStyle = {
  color: palette.brownGrey,
};
