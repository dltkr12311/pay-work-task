import React from "react";
import { Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import {
  View,
  ViewStyle,
  Modal,
  TextInput,
  Button,
  Text,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import { color, palette } from "theme";
import { closeModal } from "store/actions/modal";

export const AddTodoModal: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Modal animationType="slide" transparent={true}>
        <View style={MODAL_BACKGROUND}>
          <View style={MODAL_CONTAINER}>
            <View style={MODAL_HADER}>
              <Text style={MODAL_TITLE}>Todo를 작성해 주세요.</Text>
              <TouchableOpacity
                style={MODAL_CLOSE}
                onPress={() => dispatch(closeModal())}
              >
                <Icon name="close" />
              </TouchableOpacity>
            </View>
            <TextInput
              style={TEXT_INPUT}
              placeholder="Add an item!"
              placeholderTextColor={"#999"}
              autoCorrect={false}
            />
            <View>
              <Button title={"ADD"} onPress={() => null} />
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
  paddingBottom: 40,
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
  flexDirection: "row",
};

const MODAL_CLOSE: ViewStyle = {
  marginLeft: 80,
};

const MODAL_TITLE: TextStyle = {
  fontWeight: "bold",
  fontSize: 16,
  marginBottom: 20,
};

const TEXT_INPUT: ViewStyle = {
  borderColor: palette.brownGreyTwo,
  width: "100%",
  borderBottomWidth: 1,
  marginBottom: 10,
};
