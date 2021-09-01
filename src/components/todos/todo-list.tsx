import React from "react";
import { View, Text, TextStyle, ViewStyle, FlatList } from "react-native";
import { TodoListItem, TodoTypes } from "components";
import data from "utils/data.json";
import { palette } from "theme";
import { TodoAddTaskBar } from "./todo-add-task";
import { AddTodoModal } from "./modal";
import { useSelector } from "react-redux";

export const TodoList: React.FC = () => {
  const modalOpen = useSelector((state) => state.modals.showModal);

  const renderItem = ({ item }) => <TodoListItem items={item} />;

  return (
    <>
      <View style={ROOT}>
        <FlatList<TodoTypes>
          data={data.todoList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          ListEmptyComponent={
            <View style={LIST_EMPTY_VIEW}>
              <Text style={LIST_EMPTY_TEXT}>Task가 없습니다.</Text>
            </View>
          }
        />
        <TodoAddTaskBar />
        <AddTodoModal />
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
