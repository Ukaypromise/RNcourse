import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

const GoalInput = ({ goalInputHandler, addGoalHandler }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="What's your goal..."
        style={styles.textInput}
        onChangeText={goalInputHandler}
      />
      <Button title="Add Goal" color="#841584" onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#841584",
    borderRadius: 5,
    width: "80%",
    marginRight: 10,
    padding: 8,
    fontSize: 16,
  },
});