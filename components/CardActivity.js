import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, Animated, TouchableWithoutFeedback } from 'react-native';
import CardHeader  from './CardActivity/CardHeader';
import CardBody  from './CardActivity/CardBody';

const CardActivity = ({titleActivity, contentActivity}) => {
     
    return (  
        <View style={styles.container}>
            <CardHeader
                titleActivity={titleActivity}
            />
            <CardBody
                contentActivity={contentActivity}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        margin:'2.5%',
        borderWidth:1,
        borderColor:'#eee',
        padding:10,
        backgroundColor:'#fff'
    },
});
export default CardActivity;

