import React from 'react';
import { View, StyleSheet} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faVideo, faMicrophone, faImages } from '@fortawesome/free-solid-svg-icons';

const TypeActivityNavigationBar = () => {
    return ( 
        <View style={styles.container}>
            <FontAwesomeIcon icon={faMicrophone} size={30}/>
            <FontAwesomeIcon icon={faVideo} size={30}/>
            <FontAwesomeIcon icon={faImages} size={30}/>
        </View>
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