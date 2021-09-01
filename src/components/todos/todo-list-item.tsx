import React, { useState } from "react";
import {
  View,
  Text,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
} from "react-native";
import { CheckBox, Icon } from "react-native-elements";
import { palette, color } from "theme/";
import { TodoTypes } from "components";

interface TodoItemProps {
  items: TodoTypes[];
}

export const TodoListItem: React.FC<TodoItemProps> = ({ items }) => {
  const { content, createdAt } = items;
  const [isSelected, setSelection] = useState(false);

  const handleChecked = () => {
    setSelection(!isSelected);
  };

  return (
    <View style={ROOT}>
      <CheckBox
        checked={isSelected}
        iconType="material"
        checkedIcon="check"
        uncheckedIcon="check"
        checkedColor={palette.lightLimeGreen}
        style={CHECK_BOX}
        size={25}
        onPress={() => handleChecked()}
      />
      <Text style={isSelected ? COMPLATED_TODO_TEXT : TODO_TEXT}>
        {content}
      </Text>
      <Text style={isSelected ? COMPLATED_DATE_TEXT : DATE_TEXT}>
        {createdAt}
      </Text>
      <TouchableOpacity style={TODO_DELETE}>
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
