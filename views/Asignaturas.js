import React,{useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { Text, View, StyleSheet, FlatList, TouchableWithoutFeedback } from 'react-native';

const Asignaturas = () => {

    const navigation = useNavigation();


    const [asignaturas, setAsignaturas] = useState([
        {id:1, name:'Matematicas'},
        {id:2, name:'Lenguaje'},
        {id:3, name:'Musica'},
        {id:4, name:'Historia'},
        {id:5, name:'Artes'},
        {id:6, name:'Ciencias'},
        {id:7, name:'Algebra'},
    ]);
    
    return ( 
        <View style={styles.container}>
            <FlatList
                data={asignaturas}
                keyExtractor={asignaturas => asignaturas.id.toString()}
                renderItem = { ({item}) =>(
                    // Este on press debe ir a Tipos de aprendisaje
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('TiposAprendizajes')}> 
                        <View style={styles.card}>
                            <Text style={styles.cardText}>{item.name}</Text>
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
        backgroundColor:'#16303f',
        padding:'2.5%',
        justifyContent:'center',
    },
    card:{
        borderRadius:5,
        margin:'1.5%',
        padding:15,
        borderWidth:1,
        borderColor:'#fff',
        backgroundColor:'#2e6383',
        alignItems:'center',
        justifyContent:'center',
    },
    cardText:{
        fontSize:30,
        color:'#fff'
    },
});
export default Asignaturas;