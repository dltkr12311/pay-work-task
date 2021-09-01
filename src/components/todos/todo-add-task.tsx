import React from "react";
import { TouchableOpacity, View, ViewStyle } from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import { showModal } from "store/actions/modal";
import { palette } from "theme";

// interface AddTaskProps {
//   open: boolean;
//   onAddTask: () => void;
// }

export const TodoAddTaskBar: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <View style={ADD_TASK_ICON}>
      <TouchableOpacity onPress={() => dispatch(showModal())}>
        <Icon
          type="material"
          name="add-circle"
          color="rgba(222, 108, 110, 0.75)"
          size={70}
        />
      </TouchableOpacity>
    </View>
  );
};

const ADD_TASK_ICON: ViewStyle = {
  position: "absolute",
  left: "50%",
  bottom: 0,
  transform: [{ translateX: "-30%" }],
};
