import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';




const SearchBar = props => {


    return(

   <View style = {styles.container}>
    <TextInput placeholder='Search for messages or users' style = {styles.textInputStyle}>
        
    </TextInput>
   </View>

    );

};
const styles = StyleSheet.create({
   container:{
    backgroundColor:'#0088cc'

   },
   textInputStyle:{
    backgroundColor:'white',
    height:35,
    borderRadius:35/2,
    margin:10,
    padding:10,

   }
});
export default SearchBar;