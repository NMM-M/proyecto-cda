import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './views/Login';
import Register from './views/Register';
import Asignaturas from './views/Asignaturas';
import TiposAprendizajes from './views/TiposAprendizajes';
import Activities from './views/Activities';

const Stack = createStackNavigator ();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={Register} options={{title:"Registro"}}/>
        <Stack.Screen name="Asignaturas" component={Asignaturas} options={{headerShown:false}}/>
        <Stack.Screen name="TiposAprendizajes" component={TiposAprendizajes} options={{headerShown:false}}/>
        <Stack.Screen name="Activities" component={Activities} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
