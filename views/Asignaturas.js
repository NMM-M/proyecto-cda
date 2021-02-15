import React,{useState} from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const Asignaturas = () => {
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
                renderItem = { ({item}) =>(
                    <View style={styles.card}>
                        <Text style={styles.cardText}>{item.name}</Text>
                    </View>
                )} 
                keyExtractor={asignatura => asignaturas.id}
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
        backgroundColor:'#2e6383',
        marginVertical:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        padding:15,
    },
    cardText:{
        fontSize:30,
        color:'#fff'
    },
});
export default Asignaturas;