import React from "react";
import { View, Text, ViewStyle, TextStyle } from "react-native";
import { color, palette } from "theme/";
import data from "utils/data.json";

const today: Date = new Date();
const currentWeekday = today.toLocaleDateString("us", { weekday: "long" });
const currentDay = today.toLocaleDateString("us", { day: "numeric" });
const currentMonth = today.toLocaleDateString("us", { month: "long" });

export const Header: React.FC = () => {
  return (
    <View style={ROOT}>
      <View>
        <View style={DATE_LEFT_TOP}>
          <Text style={WEEKDAY}>{currentWeekday}, </Text>
          <Text style={DAY}> {currentDay}</Text>
        </View>
        <Text style={MONTH}>{currentMonth}</Text>
      </View>
      <View>
        <Text>{data.todoList.length} Task</Text>
      </View>
    </View>
  );
};

const ROOT: ViewStyle = {
  position: "relative",
  flexDirection: "row",
  justifyContent: "space-between",
  alignContent: "center",
  borderBottomWidth: 1,
  marginBottom: 30,
  borderColor: color.line,
  padding: 16,
  backgroundColor: "#fafaff",
};

const DATE_LEFT_TOP: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
};

const WEEKDAY: TextStyle = {
  marginBottom: 6,
  fontSize: 24,
  fontWeight: "600",
  color: color.primary,
};

const DAY: TextStyle = {
  fontSize: 20,
  fontWeight: "300",
  color: color.primary,
};

const MONTH: TextStyle = {
  color: palette.brownGrey,
  fontSize: 16,
  fontWeight: "300",
};
