import React, { useCallback } from "react";
import {
  View,
  Text,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
} from "react-native";
import { CheckBox, Icon } from "react-native-elements";
import { palette, color } from "theme/";
import { useDispatch } from "react-redux";
import { checkTodo, removeTodo } from "store/actions/todos";
import { TodoTypes } from "components";

interface TodoListProps extends TodoTypes {
  item: TodoTypes[];
}

export const TodoListItem: React.FC<TodoListProps> = ({ item }: any) => {
  const dispatch = useDispatch();
  const { id, content, isCheck, createdAt } = item;

  const onRemovePress = useCallback(() => {
    console.log("id", id);
    dispatch(removeTodo(id));
  }, [id]);

  const onCheckPress = () => {
    console.log("isCheck", isCheck, "id", id);
    dispatch(checkTodo(id, isCheck));
  };

  return (
    <View style={ROOT}>
      <CheckBox
        checked={isCheck}
        iconType="material"
        checkedIcon="check"
        uncheckedIcon="check"
        checkedColor={palette.primary}
        style={CHECK_BOX}
        size={25}
        onPress={onCheckPress}
      />
      <Text style={isCheck ? COMPLATED_TODO_TEXT : TODO_TEXT}>{content}</Text>
      <Text style={isCheck ? COMPLATED_DATE_TEXT : DATE_TEXT}>{createdAt}</Text>
      <TouchableOpacity style={TODO_DELETE} onPress={onRemovePress}>
        <Icon type="evilicon" name="close-o" color={palette.angry} size={28} />
      </TouchableOpacity>
    </View>
  );
};

const ROOT: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottomWidth: 1,
  padding: 10,
  borderColor: color.line,
};

const CHECK_BOX: ViewStyle = {};

const TODO_TEXT: TextStyle = {
  marginRight: "auto",
  fontSize: 17,
};

const COMPLATED_TODO_TEXT: TextStyle = {
  marginRight: "auto",
  fontSize: 17,
  color: palette.brownGrey,
  textDecorationLine: "line-through",
};

const DATE_TEXT: TextStyle = {
  marginRight: "auto",
  fontSize: 14,
  color: palette.brownGrey,
};

const COMPLATED_DATE_TEXT: TextStyle = {
  marginRight: "auto",
  color: palette.brownGrey,
  textDecorationLine: "line-through",
};

const TODO_DELETE: ViewStyle = {};
