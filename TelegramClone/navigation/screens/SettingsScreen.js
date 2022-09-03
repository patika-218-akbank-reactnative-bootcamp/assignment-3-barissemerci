import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, {useState,useContext} from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text, Image } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import { UserContext } from '../../context/user';
import { ThemeContext } from '../../context/theme';


const SettingsScreen = props => {
    const navigation = useNavigation();
    const {user,setUser,handleUser} = useContext(UserContext);
    const {theme,setTheme,toggleTheme} = useContext(ThemeContext);


   
    function navigateEditProfileScreen() {
        navigation.navigate('EditProfileScreen');
      }

      function navigateThemeOptionsScreen() {
        navigation.navigate('ThemeOptionsScreen');
      }
    return(

   <View style = {[styles.container,{backgroundColor:theme.backgroundColor}]}>
    <Image style = {styles.imageStyle}  source={{uri:"https://picsum.photos/id/7/150/150"}}  />
    <TouchableOpacity onPress={navigateThemeOptionsScreen} style = {styles.buttonContainer}>
        <Text style = {styles.buttonTextStyle}>Theme</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={navigateEditProfileScreen} style = {styles.buttonContainer}>
        <Text style = {styles.buttonTextStyle}>Edit Profile</Text>
    </TouchableOpacity>
    <TouchableOpacity style = {[styles.buttonContainer,{marginTop:100}]}>
        <Text style = {styles.buttonTextStyle}  onPress={() => {
        handleUser(null);


}}>Log out</Text>
    </TouchableOpacity>
   </View>

    );

};
const styles = StyleSheet.create({
   container:{
    width:'100%',
    height:'100%'
   },
   imageStyle:{
    width:150,
    height:150,
    borderRadius:75,
    alignSelf:'center',
    marginTop:100
   },
   buttonContainer:{
    backgroundColor:'#0088cc',
    width:200,
    height:50,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    marginTop:50
   },
   buttonTextStyle:{
    fontWeight:'bold',
    fontSize:16,
    color:'white'
   }
});
export default SettingsScreen;