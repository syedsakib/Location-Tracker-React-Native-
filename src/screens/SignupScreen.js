import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function SignupScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>SignupScreen</Text>
      <Button
        title='go to signin'
        onPress={() => navigation.navigate('Signin')}
      />
      <Button
        title='go to mainflow'
        onPress={() => navigation.navigate('mainFlow')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SignupScreen;
