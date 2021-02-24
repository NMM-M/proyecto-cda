import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Tile} from 'react-native-elements';
import {View, StyleSheet, FlatList} from 'react-native';

const Assignatures = () => {
  const navigation = useNavigation();

  const [assignatures, setAssignatures] = useState([
    {id: 1, name: 'Matematicas'},
    {id: 2, name: 'Lenguaje'},
    {id: 3, name: 'Musica'},
    {id: 4, name: 'Historia'},
    {id: 5, name: 'Artes'},
    {id: 6, name: 'Ciencias'},
    {id: 7, name: 'Algebra'},
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FlatList
          data={assignatures}
          keyExtractor={(assignatures) => assignatures.id.toString()}
          renderItem={({item}) => (
            <Tile
              onPress={() => navigation.navigate('LearningStyle')}
              featured
              activeOpacity={0.7}
              title={item.name}
              titleStyle={styles.titleStyle}
              containerStyle={styles.tileContainer}
              overlayContainerStyle={styles.tileOverlay}
              imageContainerStyle={styles.imageContainer}
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
    width: '100%',
  },
});
export default Assignatures;
