import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainContainer from './navigation/MainContainer';


const Stack = createNativeStackNavigator();


function App() {
  return (
   <MainContainer></MainContainer>
  );
}

export default App;