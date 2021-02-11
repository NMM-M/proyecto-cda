import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faBars  } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return ( 
        <View style={styles.container}>
            <FontAwesomeIcon icon={faHome} size={35} color={'white'}/>
            <FontAwesomeIcon icon={faBars} size={35} color={'white'}/>
        </View>
    );
}

const  styles = StyleSheet.create({
    container:{
        width:'100%',
        height:50,
        backgroundColor:'#002b3c',
        padding:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    texto:{
        color:'#fff',
        fontSize:20,
    },
});
export default Header;