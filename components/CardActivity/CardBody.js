import React, {useState, useEffect} from 'react';
import { Text,View, Animated, TouchableWithoutFeedback, StyleSheet, Image, Modal, Pressable} from 'react-native';

const CardBody = ({contentActivity}) => {
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
    //#region MODAL
    const [modalVisible, setModalVisible] = useState(false);


    //#endregion
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTextTitle}>Sube tu Trabajo Aqui</Text>
                    <Pressable
                        style={[styles.modalButton, styles.submitButton]}
                        //onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.modalButtonText}>Enviar Evidencia</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.cancelButton,styles.modalButton]}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.modalButtonText}>Cancelar</Text>
                    </Pressable>
                </View>
                </View>
            </Modal>
            <View>
                <Text style={styles.infoTitle}>
                    Descripcion: <Text style={styles.infoDescription}>{description}</Text>                
                </Text>
            </View>
            <View style={styles.containerImage}>
                <Text style={styles.infoTitle}>{concept}</Text>
                <Image
                    style={styles.image}
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
                    onPress = {()=> setModalVisible(!modalVisible)}
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
    containerImage:{
        justifyContent:'center', 
        alignItems:'center'
    },
    image:{
        width:300, 
        height:200, 
        marginTop:10
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
    //Estilos Modal
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalButton: {
        marginVertical:5,
        borderRadius: 5,
        paddingVertical:7,
        paddingHorizontal: 10,
        elevation: 2,
    },
    submitButton:{
        backgroundColor:'#002b3c', 
    },
    cancelButton: {
        backgroundColor:'#ff0000', 
    },
    modalButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize:15,
    },
    modalTextTitle: {
        fontSize:20,
        marginBottom: 15,
        textAlign: "center"
    }
});
 
export default CardBody;