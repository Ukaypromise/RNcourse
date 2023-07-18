import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const GoalItem = ({ itemData }) => {
  return (
    <View style={styles.goalItemText}>
      <Text style={styles.goalItem}>{itemData.item.text}</Text>
    </View>
  );
};

export default GoalItem

const styles = StyleSheet.create({
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