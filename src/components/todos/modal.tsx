import React, { useState } from "react";
import { Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import {
  View,
  ViewStyle,
  Modal,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { palette } from "theme";
import { closeModal } from "store/actions/modal";
import shortid from "shortid";
import { addTodo } from "store/actions/todos";
import { currentDate } from "utils/date";

const id = shortid.generate();
export const AddTodoModal: React.FC = () => {
  const dispatch = useDispatch();

  const [inputText, setInputText] = useState<string>("");
  const onChangeInputText = () => {
    console.log(inputText);
    setInputText(inputText);
  };

  const onAddTodo = () => {
    dispatch(addTodo(id, inputText, currentDate()));
    setInputText("");
  };

  return (
    <View>
      <Modal transparent={true}>
        <View style={MODAL_BACKGROUND}>
          <View style={MODAL_CONTAINER}>
            <View style={MODAL_HADER}>
              <TouchableOpacity
                style={MODAL_CLOSE}
                onPress={() => dispatch(closeModal())}
              >
                <Icon name="close" />
              </TouchableOpacity>
            </View>
            <TextInput
              style={TEXT_INPUT}
              placeholder="todo를 작성해 주세요."
              onChangeText={onChangeInputText}
              value={inputText}
              placeholderTextColor={"#999"}
              autoCorrect={false}
            />
            <View>
              <Button title={"ADD"} onPress={onAddTodo} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const MODAL_BACKGROUND: ViewStyle = {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.5)",
  justifyContent: "center",
  alignItems: "center",
};

const MODAL_CONTAINER: ViewStyle = {
  position: "relative",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: palette.white,
  borderRadius: 10,
  paddingTop: 20,
  paddingBottom: 20,
  paddingRight: 30,
  paddingLeft: 30,
  width: 300,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
};

const MODAL_HADER: ViewStyle = {
  width: "100%",
  marginBottom: 20,
};

const MODAL_CLOSE: ViewStyle = {
  marginLeft: "auto",
};

const TEXT_INPUT: ViewStyle = {
  borderColor: palette.brownGreyTwo,
  width: "100%",
  borderBottomWidth: 1,
  marginBottom: 10,
};
