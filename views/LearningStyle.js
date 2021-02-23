import React from 'react';
import {useState} from 'react';
import {Tile} from "react-native-elements";
import {View, FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LearningStyle = () => {
  //#region DEFINICION STATES Y VARIABLES
  const navigation = useNavigation();

  const [Learnings, setLearnings] = useState([
    {id: 1, name: 'Kinestesico'},
    {id: 2, name: 'Auditivo'},
    {id: 3, name: 'Visual'},
    {id: 4, name: 'Memoristico'},
  ]);
  //#endregion

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FlatList
          data={Learnings}
          keyExtractor={(Learnings) => Learnings.id.toString()}
          renderItem={({item}) => (
            <Tile
              featured
              activeOpacity={0.7}
              title={item.name}
              titleStyle={styles.title}
              containerStyle={styles.tileContainer}
              overlayContainerStyle={styles.tileOverlay}
              imageContainerStyle={styles.imageContainer}
              onPress={() => navigation.navigate('Activities')}
              imageSrc={require('../assets/images/actuar.jpg')}
            />
          )}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16303f',
  },
  content: {
    padding: 15,
  },
  titleStyle: {
    width: '100%',
    letterSpacing: 0.5,
    fontSize: 26,
    fontWeight: 'bold',
  },
  tileOverlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  tileContainer: {
    height: 120,
    width: '100%',
    marginVertical: 5,
    borderWidth: 3,
    borderColor: '#fff',
  },
  imageContainer: {
    height: '100%',
    width:'100%'
  },
});

export default LearningStyle;
