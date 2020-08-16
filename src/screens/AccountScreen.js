import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-navigation';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

import { Context as AuthContext } from '../context/AuthContext';

function AccountScreen(props) {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <View style={styles.container}>
        <Text style={styles.text}>AccountScreen</Text>
        <Spacer />
        <Spacer>
          <Button title='Sign Out' onPress={signout} />
        </Spacer>
      </View>
    </SafeAreaView>
  );
}

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <FontAwesome name='gear' size={20} />,
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: '50%',
  },
});

export default AccountScreen;
