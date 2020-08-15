import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

function TrackListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>TrackListScreen</Text>
      <Button
        title='go to trackdetail'
        onPress={() => navigation.navigate('TrackDetail')}
      />
      <Button
        title='go to loginflow'
        onPress={() => navigation.navigate('loginFlow')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default TrackListScreen;
