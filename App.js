import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVidible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalhandler() {
    setModalIsVidible(true);
  }

  function endAddGoalhandler() {
    setModalIsVidible(false);
  }

  function addGoalhandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() }]);
    endAddGoalhandler();
  };

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color='#5e0acc'
          onPress={startAddGoalhandler}
        />
        {modalIsVisible && <GoalInput visible={modalIsVisible} onAddGoal={addGoalhandler} onCancel={endAddGoalhandler} />}
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} renderItem={itemData => {
            return <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler}
            />;
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
