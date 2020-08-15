import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

function SignupScreen({ navigation }) {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);
  //console.log(state);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText='Sign Up for Tracker'
        errorMessage={state.errorMessage}
        submitButtonText='Sign Up'
        onSubmit={({ email, password }) => signup({ email, password })}
      />
      <NavLink
        text='Already have an account ? Sign In instead'
        routeName='Signin'
      />
    </View>
  );
}

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;
