import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { useState } from "react";

export default function App() {
  const [enteredGoalText, SetenteredGoalText] = useState("");
  const [courseGoal, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    SetenteredGoalText(enteredText);
  }

  function addGoalHandler(e) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
      />
      <Text style={styles.goalText}>List of Goals</Text>
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoal}
          renderItem={(itemData) => {
            return <GoalItem itemData={itemData} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
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
 
});
