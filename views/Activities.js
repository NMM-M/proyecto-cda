import React, {useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Icon} from 'react-native-elements';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CardActivity from "../components/CardActivity";
//Navegacion
const Tab = createMaterialTopTabNavigator();

const Activities = () => {
  const [activityTypes, setactivityTypes] = useState([
    {
      id: 1,
      type: 'Video',
      title: 'Actuacion',
      concept: 'La celula',
      description:
        'Crea un video de un  minuto, donde tu y tus amigos representen el siguiente concepto.',
      instruction:
        'Grabe un video, suba a Youtube y copie el link en el cuadro a continuacion.',
    },
    {
      id: 2,
      type: 'Text',
      Icon: '',
      title: 'Resumen',
      concept: 'La Celula',
      description: 'Haz un resumen indicando las caracteristicas de este tema.',
    },
    {id: 3, type: 'Audio', title: 'Entrevista'},
  ]);

  return (
    <SafeAreaProvider>
      <Tab.Navigator
        tabBarOptions={styleTabBar.tabBar}
        screenOptions={({route}) => ({
          tabBarIcon: () => {
            let iconName;
            if (route.name === 'Text') {
              iconName = 'format-text';
            } else if (route.name === 'Video') {
              iconName = 'video';
            } else if (route.name === 'Audio') {
              iconName = 'microphone';
            }
            return (
              <Icon
                name={iconName}
                type="material-community"
                size={30}
                color={'black'}
              />
            );
          },
        })}>
        {activityTypes.map((type) => (
          <Tab.Screen
            key={type.id.toString()}
            name={type.type}
            children={() => (
              <CardActivity
                contentActivity={{
                  id: type.id,
                  title: type.title,
                  concept: type.concept,
                  instruction: type.instruction,
                  description: type.description,
                }}
              />
            )}
          />
        ))}

      </Tab.Navigator>
    </SafeAreaProvider>
  );
};
const styleTabBar = {
  tabBar: {
    showLabel: false,
    showIcon: true,
    allowFontScaling: true,
    tabStyle: {
      padding: 5,
    },
    iconStyle: {
      width: '100%',
      height: '100%',
    },
  },
};
export default Activities;
