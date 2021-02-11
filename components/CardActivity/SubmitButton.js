import React, { useState } from 'react';
import { TouchableWithoutFeedback, Text, StyleSheet, Animated} from 'react-native';

const SubmitButton = () => {
    //#region STATES y VARIABLES
    const typeActivity = 'Video';
    //#endregion
    //#region FUNCIONES
    //#endregion
    
    //#region ANIMACION
    const [animation] = useState(new Animated.Value(1));
    
    const inAnimation = () =>{
        Animated.spring(
            animation,{
                useNativeDriver:true,
                toValue:.95
            }
        ).start();
    };
    const outAnimation = () =>{
        Animated.spring(
            animation,{
                useNativeDriver:true,
                toValue:1,
                friction:4, //mas bajo mayor rebote
                tension:30,
            }
        ).start();
    };

    const styleAnimation =  {
        transform:[{scale:animation}]
    }
    
    //#endregion

    return ( 
        <Animated.View style={[styles.container, styleAnimation]}>
            <TouchableWithoutFeedback
                onPressIn={() => inAnimation()}
                onPressOut={() => outAnimation()}
            >
                <Text style={styles.textButton}>Entregar {typeActivity ? typeActivity : 'Actividad' }</Text>
            </TouchableWithoutFeedback>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginVertical:10,
        padding:10,
        backgroundColor:'#002b3c',
        justifyContent:'center',
        alignItems:'center'
    },
    textButton:{
        color:'#FFF',
        fontSize:18
    },
});
 
export default SubmitButton;