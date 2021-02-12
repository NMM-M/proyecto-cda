import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './views/Login';
import Register from './views/Register';
import Activities from './views/Activities';

const Stack = createStackNavigator ();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={Register} options={{title:"Registro"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
