/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
//Navegacion
import {TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//componentes
import {Icon} from 'react-native-elements';
//Vistas
import Login from './views/Login';
import Register from './views/Register';
import Assignatures from './views/Assignatures';
import LearningStyle from './views/LearningStyle';
import Activities from './views/Activities';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Login'}
        screenOptions={styles.headerVisible}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={styles.headerOcult}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{title: 'Registro de Usuarios'}}
        />
        <Stack.Screen
          name="Assignatures"
          component={Assignatures}
          options={{title: 'Asignaturas'}}
        />
        <Stack.Screen
          name="LearningStyle"
          component={LearningStyle}
          options={{title: 'Estilos de Aprendizaje'}}
        />
        <Stack.Screen
          name="Activities"
          component={Activities}
          options={{
            title: 'Actividades',
            headerRight: () => (
              <TouchableOpacity style={styles.iconMenu}>
                <Icon name="menu" type="material-community" size={34} />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = {
  headerOcult: {
    headerShown: false,
  },
  headerVisible: {
    headerShown: true,
    headerMode: 'float',
    headerTitleAlign: 'center',
    headerTitleAllowFontScaling: true,
  },
  headerLeft: {
    margin: 10,
  },
  iconMenu: {
    padding: 10,
  },
};

export default App;
