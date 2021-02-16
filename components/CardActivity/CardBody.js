import React, {useState, useEffect} from 'react';
import { Text,View, Animated, TouchableWithoutFeedback, StyleSheet, Image } from 'react-native'

const CardBody = ({contentActivity}) => {
    console.log(contentActivity);
    //#region STATES Y VARIABLES    
    const {id, concept , description , instruccion, } = contentActivity; 
    //#endregion
    //#region ANIMACION
    const [animation] = useState(new Animated.Value(1));

    const inAnimation =  () => {
        Animated.spring(
            animation,{
                useNativeDriver:true,
                toValue:.95 
            }
        ).start();

    }
    const outAnimation = () => {
        Animated.spring(
            animation, {
                useNativeDriver:true,
                toValue:1,
                friction:4,
                tension:30,
            }
        ).start();
    }

    const styleAnimation =  {
        transform:[{scale:animation}]
    }
    //#endregion
    return (
        <View>
            <View>
                <Text style={styles.infoTitle}>
                    Descripcion: <Text style={styles.infoDescription}>{description}</Text>                
                </Text>
            </View>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text style={styles.infoTitle}>La Celula</Text>
                <Image
                    style={{width:300, height:200, marginTop:10}}
                    source={require('../../assets/images/celula.jpg')}
                />
            </View>
            <View>
                <Text style={styles.infoTitle}>
                    Intrucciones: <Text style={styles.infoDescription}>{instruccion}</Text>
                </Text>
            </View>
            <View>
                <TouchableWithoutFeedback
                    onPressIn = {() => inAnimation()}
                    onPressOut = {() => outAnimation()}
                >
                    <Animated.View style={[styles.containerButton, styleAnimation]}>
                        <Text style={styles.textButton}>Entregar:</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View> 
        </View>
    );
}
const styles = StyleSheet.create({
    infoTitle:{
        fontSize:17,
        marginVertical:5,
        fontWeight:'bold'
    },
    infoDescription:{
        fontSize:16,
        fontWeight:'normal'
    },
    textButton:{
        color:'#FFF',
        fontSize:18
    },
    containerButton:{
        marginVertical:10,
        padding:10,
        backgroundColor:'#002b3c',
        justifyContent:'center',
        alignItems:'center'
    },
    textButton:{
        color:'#fff',
        fontSize:20
    },
});
 
export default CardBody;