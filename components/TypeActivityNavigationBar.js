// comentado para el app import 'react-native-gesture-handler';

import React, {useState} from 'react';
//componente para navegacion
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CardActivity from './CardActivity';


const TypeActivityNavigationBar = () => {

    const Tab = createMaterialTopTabNavigator();
    const [activityTypes, setactivityTypes] = useState([
        {id:1, type:'Video'},
        {id:2, type:'Text'},
        {id:3, type:'Audio'},
    ]);


    return (
        <>
            <Tab.Navigator
                tabBarOptions={{
                    allowFontScaling:true,
                    labelStyle:{
                        fontSize:16,
                        fontWeight:'bold'
                    }
                }}
            >
                {activityTypes.map(type => (
                    <Tab.Screen
                        key={type.id}
                        name={type.type}
                        component={CardActivity}
                    />
                ))}
            </Tab.Navigator>
        </> 
    )
} 
export default TypeActivityNavigationBar;