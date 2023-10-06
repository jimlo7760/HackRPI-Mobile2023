import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import EventObject from "./EventObject"; // Import the EventObject component

//reusable component that ties an event object to it's notification bell
const CalanderObject = ({
  workshop_Title,
  Time,
  Location,
  Description,
  isRed,
}) => {
  const [isActive, setIsActive] = useState(false); // Define isActive state

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const checkCondition = () => {
    // Implement later, if the event is currently happening, return true.
    return true;
  };

  return (
    <View style={styles.container}>
      <EventObject
        workshop_title={workshop_Title}
        time={Time}
        location={Location}
        description={Description}
        isRed={isRed} //this line is use for hardcode
        //isRed={checkCondition()} -> This line will be use instead if we implement checkCondition() function
      />
      <Feather
        name={isActive ? "bell-off" : "bell"}
        size={24}
        color="white"
        onPress={handleClick} // Add onPress to handle click
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Arrange children horizontally
    alignItems: "center", // Center children vertically
    backgroundColor: "transparent", // Replace with your desired background color
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default CalanderObject;
