import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);



  function addGoalhandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() }]);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.appContainer}>
        <GoalInput onAddGoal={addGoalhandler} />
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} renderItem={itemData => {
            return <GoalItem text={itemData.item.text} />;
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

  goalsContainer: {
    flex: 5
  },

});
