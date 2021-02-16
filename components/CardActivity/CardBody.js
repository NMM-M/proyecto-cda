import React, {useState} from 'react';
import { Text,View, Animated, TouchableWithoutFeedback, StyleSheet, Image } from 'react-native'

const CardBody = () => {
    //#region STATES Y VARIABLES    
    
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
                <Text style={styles.infoTitle}>Descripcion:</Text>
                <Text style={styles.infoDescription}>Crea un video de un  minuto, donde tu y tus amigos representen el siguiente concepto:</Text>
            </View>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Image
                    style={{width:300, height:200, marginTop:10}}
                    source={require('../../assets/images/celula.jpg')}
                />
            </View>
            <View>
                <Text style={styles.infoTitle}>
                    Intrucciones:
                </Text>
                <Text style={styles.infoDescription}>
                    Grabe un video, suba a Youtube y copie el link en el cuadro a continuacion.
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
    },
    infoDescription:{
        fontSize:15,
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
        fontSize:18
    },
});
 
export default CardBody;