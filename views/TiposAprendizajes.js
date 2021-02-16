import React from 'react';
import { useState } from 'react';
import { Text, View, FlatList, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const TiposAprendizajes = () => {
    //#region DEFINICION STATES Y VARIABLES
    const navigation = useNavigation();
    
    const [tipos, setTipos] = useState([
        {id:1,name:'Kinestesico'},
        {id:2,name:'Auditivo'},
        {id:3,name:'Visual'},
        {id:4,name:'Memoristico'},
    ]);
    //#endregion
    

    
    return (
     <View style={styles.container}>
         <FlatList
            data={tipos}
            keyExtractor={tipos => tipos.id.toString()}
            renderItem={({item}) => (
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate("Activities")}
                >
                    <View style={styles.item}>
                        <Text style={styles.itemText}>{item.name}</Text>
                    </View>
                </TouchableWithoutFeedback>
            )}
            />
     </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor: '#16303f',
        padding:'2.5%',
    },
    item:{
        borderRadius:5,
        margin:'1.5%',
        padding:15,
        borderWidth:1,
        borderColor:'#fff',
        backgroundColor:'#2e6383',
        alignItems:'center',
        justifyContent:'center',
    },
    itemText:{
        fontSize:30,
        color:'#fff',
    },
});
 
export default TiposAprendizajes;