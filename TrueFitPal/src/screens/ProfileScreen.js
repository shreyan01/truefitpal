import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Button, TextInput, List, Switch, Avatar } from 'react-native-paper';

const ProfileScreen = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    height: '175',
    weight: '70',
    goal: 'Lose Weight',
    notifications: true,
    darkMode: false,
  });

  const updateProfile = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.profileHeader}>
          <Avatar.Text
            size={80}
            label={profile.name.split(' ').map(n => n[0]).join('')}
            style={styles.avatar}
          />
          <Title style={styles.name}>{profile.name}</Title>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Personal Information</Title>
          <TextInput
            mode="outlined"
            label="Name"
            value={profile.name}
            onChangeText={(text) => updateProfile('name', text)}
            style={styles.input}
          />
          <TextInput
            mode="outlined"
            label="Height (cm)"
            value={profile.height}
            onChangeText={(text) => updateProfile('height', text)}
            keyboardType="numeric"
            style={styles.input}
          />
          <TextInput
            mode="outlined"
            label="Weight (kg)"
            value={profile.weight}
            onChangeText={(text) => updateProfile('weight', text)}
            keyboardType="numeric"
            style={styles.input}
          />
          <TextInput
            mode="outlined"
            label="Goal"
            value={profile.goal}
            onChangeText={(text) => updateProfile('goal', text)}
            style={styles.input}
          />
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Settings</Title>
          <List.Item
            title="Notifications"
            right={() => (
              <Switch
                value={profile.notifications}
                onValueChange={(value) => updateProfile('notifications', value)}
              />
            )}
          />
          <List.Item
            title="Dark Mode"
            right={() => (
              <Switch
                value={profile.darkMode}
                onValueChange={(value) => updateProfile('darkMode', value)}
              />
            )}
          />
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Account</Title>
          <Button
            mode="outlined"
            onPress={() => {/* Implement logout */}}
            style={styles.button}
          >
            Logout
          </Button>
          <Button
            mode="outlined"
            onPress={() => {/* Implement delete account */}}
            style={[styles.button, styles.deleteButton]}
            textColor="red"
          >
            Delete Account
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
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
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  avatar: {
    backgroundColor: '#6200ee',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
  },
  input: {
    marginTop: 16,
  },
  button: {
    marginTop: 16,
  },
  deleteButton: {
    borderColor: 'red',
  },
});

export default ProfileScreen; 