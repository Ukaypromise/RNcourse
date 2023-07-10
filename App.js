import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="What's your goal..." style={styles.textInput} />
        <Button title="Add Goal" color="#841584" />
      </View>
      <View style={styles.goalContainer}>
        <Text style={styles.goalText}>List of Goals</Text>
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
    flex:5,
    marginTop: 20,
    padding: 10,
    backgroundColor: "#841584",
    borderRadius: 5,
  },
  goalText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
