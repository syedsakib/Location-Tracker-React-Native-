import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

function SigninScreen({ navigation }) {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  console.log(state);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText='Sign In for Tracker'
        errorMessage={state.errorMessage}
        submitButtonText='Sign In'
        onSubmit={signin}
      />
      <NavLink
        text='Dont have an account ? Sign Up instead'
        routeName='Signup'
      />
    </View>
  );
}

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: '30%',
  },
  text: {
    alignSelf: 'center',
  },
  errormessage: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
  navigationText: {
    color: 'blue',
    textAlign: 'center',
    fontSize: 15,
  },
});

export default SigninScreen;
