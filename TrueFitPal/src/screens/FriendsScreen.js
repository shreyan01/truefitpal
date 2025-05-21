import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Button, TextInput, List, Dialog, Portal, Text } from 'react-native-paper';

const FriendsScreen = () => {
  const [friends, setFriends] = useState([]);
  const [collaborationCode, setCollaborationCode] = useState('');
  const [dialogVisible, setDialogVisible] = useState(false);
  const [newFriendCode, setNewFriendCode] = useState('');

  const generateCode = () => {
    // In a real app, this would generate a unique code from the backend
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setCollaborationCode(code);
  };

  const addFriend = () => {
    if (newFriendCode) {
      // In a real app, this would validate the code with the backend
      setFriends([...friends, { id: Date.now(), name: 'New Friend', code: newFriendCode }]);
      setNewFriendCode('');
      setDialogVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Your Collaboration Code</Title>
            <View style={styles.codeContainer}>
              <TextInput
                mode="outlined"
                label="Code"
                value={collaborationCode}
                style={styles.codeInput}
                editable={false}
              />
              <Button mode="contained" onPress={generateCode} style={styles.generateButton}>
                Generate
              </Button>
            </View>
            <Text style={styles.codeHint}>
              Share this code with friends to connect with them
            </Text>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title>Friends</Title>
            {friends.length === 0 ? (
              <List.Item
                title="No friends added"
                description="Add friends using their collaboration code"
                left={props => <List.Icon {...props} icon="account-group" />}
              />
            ) : (
              friends.map(friend => (
                <List.Item
                  key={friend.id}
                  title={friend.name}
                  description={`Today's Progress: 1,200 calories`}
                  left={props => <List.Icon {...props} icon="account" />}
                  right={props => (
                    <Button
                      {...props}
                      mode="text"
                      onPress={() => {/* View friend's details */}}
                    >
                      View
                    </Button>
                  )}
                />
              ))
            )}
          </Card.Content>
        </Card>
      </ScrollView>

      <Button
        mode="contained"
        onPress={() => setDialogVisible(true)}
        style={styles.addButton}
        icon="account-plus"
      >
        Add Friend
      </Button>

      <Portal>
        <Dialog visible={dialogVisible} onDismiss={() => setDialogVisible(false)}>
          <Dialog.Title>Add Friend</Dialog.Title>
          <Dialog.Content>
            <TextInput
              mode="outlined"
              label="Enter Friend's Code"
              value={newFriendCode}
              onChangeText={setNewFriendCode}
              style={styles.dialogInput}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setDialogVisible(false)}>Cancel</Button>
            <Button onPress={addFriend}>Add</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
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
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  codeInput: {
    flex: 1,
    marginRight: 16,
  },
  generateButton: {
    backgroundColor: '#6200ee',
  },
  codeHint: {
    marginTop: 8,
    color: '#666',
    fontSize: 12,
  },
  addButton: {
    margin: 16,
    backgroundColor: '#6200ee',
  },
  dialogInput: {
    marginTop: 8,
  },
});

export default FriendsScreen; 