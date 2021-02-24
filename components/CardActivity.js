import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import CardHeader from './CardActivity/CardHeader';
import CardBody from './CardActivity/CardBody';

const CardActivity = ({contentActivity}) => {
  const {title} = contentActivity;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <CardHeader titleActivity={title} />
          <CardBody contentActivity={contentActivity} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#16303f',
  },
  content: {
    margin: '2.5%',
    borderWidth: 1,
    borderColor: '#eee',
    padding: 10,
    backgroundColor: '#fff',
  },
});
export default CardActivity;
