import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

function NavLink({ navigation, text, routeName }) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    textAlign: 'center',
    fontSize: 17,
  },
});

export default withNavigation(NavLink);
