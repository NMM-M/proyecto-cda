import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import CardHeader from './CardActivity/CardHeader';
import CardBody from './CardActivity/CardBody';

const CardActivity = ({contentActivity}) => {
  const {title} = contentActivity;

  return (
    <View style={styles.container}>
      <CardHeader titleActivity={title} />
      <CardBody contentActivity={contentActivity} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: '2.5%',
    borderWidth: 1,
    borderColor: '#eee',
    padding: 10,
    backgroundColor: '#fff',
  },
});
export default CardActivity;
