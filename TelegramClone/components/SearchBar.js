import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, {useContext} from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';
import { ThemeContext } from '../context/theme';




const SearchBar = props => {

    const {theme,setTheme,toggleTheme} = useContext(ThemeContext);

    return(

   <View style = {[styles.container,{backgroundColor:theme.telegramColor}]}>
    <TextInput placeholder='Search for messages or users' style = {styles.textInputStyle}>
        
    </TextInput>
   </View>

    );

};
const styles = StyleSheet.create({
   container:{

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