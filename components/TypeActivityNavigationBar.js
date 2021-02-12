import 'react-native-gesture-handler';

import React, {useState} from 'react';
import { View, StyleSheet} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faVideo, faMicrophone, faImages } from '@fortawesome/free-solid-svg-icons';
//componente para navegacion
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CardActivity from './CardActivity';


const TypeActivityNavigationBar = () => {
    const Tab = createMaterialTopTabNavigator();
    const [activityTypes, setactivityTypes] = useState([
        {id:1, type:'video', name:'Video'},
        {id:2, type:'text', name:'Texto'},
        {id:3, type:'audio', name:'Audio'},
    ]);


    return (
        <>
        <NavigationContainer>
            <Tab.Navigator>
                {activityTypes.map(type => (
                    <Tab.Screen
                        key={type.id}
                        name={type.name}
                        component={CardActivity}
                    />
                ))}
            </Tab.Navigator>
        </NavigationContainer>
        {/* <View style={styles.container}>
            <FontAwesomeIcon icon={faMicrophone} size={30}/>
            <FontAwesomeIcon icon={faVideo} size={30}/>
            <FontAwesomeIcon icon={faImages} size={30}/>
        </View> */}
        </> 
    )
}
const  styles = StyleSheet.create({
    container:{
        width:'100%',
        height:45,
        borderBottomColor:'black',
        borderBottomWidth:.5,
        padding:3,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    texto:{
        color:'#fff',
        fontSize:20,
    },
})

 
export default TypeActivityNavigationBar;