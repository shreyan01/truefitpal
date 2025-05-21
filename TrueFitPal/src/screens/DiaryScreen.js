import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Button, TextInput, List, FAB } from 'react-native-paper';

const DiaryScreen = () => {
  const [meals, setMeals] = useState([]);
  const [waterIntake, setWaterIntake] = useState(0);

  const addMeal = () => {
    // This will be implemented with a modal or new screen
    console.log('Add meal pressed');
  };

  const addWater = () => {
    setWaterIntake(prev => prev + 250); // Add 250ml
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Water Intake</Title>
            <View style={styles.waterContainer}>
              <TextInput
                mode="outlined"
                label="Water (ml)"
                value={waterIntake.toString()}
                keyboardType="numeric"
                style={styles.waterInput}
                editable={false}
              />
              <Button mode="contained" onPress={addWater} style={styles.waterButton}>
                +250ml
              </Button>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title>Today's Meals</Title>
            {meals.length === 0 ? (
              <List.Item
                title="No meals logged"
                description="Tap the + button to add a meal"
                left={props => <List.Icon {...props} icon="food" />}
              />
            ) : (
              meals.map((meal, index) => (
                <List.Item
                  key={index}
                  title={meal.name}
                  description={`${meal.calories} calories`}
                  left={props => <List.Icon {...props} icon="food" />}
                />
              ))
            )}
          </Card.Content>
        </Card>
      </ScrollView>

      <FAB
        style={styles.fab}
        icon="plus"
        onPress={addMeal}
        label="Add Meal"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    margin: 16,
    elevation: 4,
  },
  waterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  waterInput: {
    flex: 1,
    marginRight: 16,
  },
  waterButton: {
    backgroundColor: '#6200ee',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#6200ee',
  },
});

export default DiaryScreen; 