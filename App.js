import { StyleSheet, Text, View, Button, TextInput, ScrollView } from "react-native";
import { useState } from "react";

export default function App() {
  const [goals, setGoals] = useState("");
  const [listGoal, setListGoal] = useState([]);

  function goalInputHandler(enteredText) {
    setGoals(enteredText);
  }

  function addGoalHandler(e) {
    setListGoal((currentGoals) => [...currentGoals, goals]);
    setGoals("");
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="What's your goal..."
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" color="#841584" onPress={addGoalHandler} />
      </View>
      <Text style={styles.goalText}>List of Goals</Text>
      <View style={styles.goalContainer}>
        <ScrollView>
          {listGoal.map((goal) => (
            <View style={styles.goalItemText} key={goal}>
              <Text style={styles.goalItem}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    padding: 50,
    paddingHorizontal: 20,
  },
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
  goalContainer: {
    flex: 5,
    marginTop: 20,
    padding: 10,
    backgroundColor: "#841584",
    borderRadius: 5,
  },
  goalText: {
    color: "#841584",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  goalItemText: {
    margin: 8,
    padding: 10,
    backgroundColor: "#F5FCFF",
    borderRadius: 5,
  },
  goalItem: {
    color: "#841584",
  },
});
