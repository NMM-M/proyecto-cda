import React from 'react';
import { View, Image, Text, StyleSheet} from 'react-native'
const CardHeader = () => {
    return ( 
        <View style={styles.container}>
            <Image
                resizeMode={'cover'}
                style={styles.img}
                source={require('../../assets/images/actuar.jpg')}
            />
            <View style={styles.titulo}>
                <Text style={styles.textTitle}>Juego de actuacion</Text>
            </View>
        </View>
    );
}
 
const styles = StyleSheet.create({
    container:{
        width:'100%',
        marginVertical:5,
    },
    img:{
        borderRadius:5,
        width:'100%',
        height:130,
    },
    titulo:{
        backgroundColor:'rgba(0,0,0,0.3)',
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0,
        height:130,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    textTitle:{
        
        color:'#fff',
        fontSize:24,
    },
});
export default CardHeader;

