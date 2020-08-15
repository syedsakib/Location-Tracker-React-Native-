import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

import Spacer from './Spacer';

function AuthForm({ headerText, errorMessage, onSubmit, submitButtonText }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Spacer>
        <Text style={styles.text} h3>
          {headerText}
        </Text>
      </Spacer>

      <Spacer />
      <Input
        label='Email'
        value={email}
        onChangeText={(newEmail) => setEmail(newEmail)}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Input
        label='Password'
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}> {errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  errorMessage: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

export default AuthForm;
