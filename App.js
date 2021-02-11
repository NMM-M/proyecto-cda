import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native'
import Header from './components/Header';
import TypeActivityNavigationBar from './components/TypeActivityNavigationBar';
import CardActivity from './components/CardActivity';


const App = () => {
  return (
    <>
    <Header/>
    <TypeActivityNavigationBar/>
    <View>
      <ScrollView>
        <CardActivity/>
      </ScrollView>
    </View>
    </>
  );
};


export default App;
