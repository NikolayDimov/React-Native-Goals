import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputhandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalhandler() {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() }]);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder='Your course goal...' onChangeText={goalInputhandler} />
          <Button title="Add Goal" onPress={addGoalhandler} />
        </View>
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} renderItem={itemData => {

            return (
              <View style={styles.goalItem} >
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false} />

          {/* <ScrollView alwaysBounceVertical={false}>
            {courseGoals.map((goal) => (
              <View key={goal} style={styles.goalItem} >
                <Text style={styles.goalText}>{goal}</Text>
              </View>
            ))}
          </ScrollView> */}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: "70%",
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',

  },
  goalText: {
    color: 'white'
  }
});
