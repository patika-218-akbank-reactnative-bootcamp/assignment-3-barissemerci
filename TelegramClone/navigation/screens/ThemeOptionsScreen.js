import React, {useState,useContext} from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text, Image } from 'react-native';
import { ThemeContext } from '../../context/theme';
import IconLight from 'react-native-vector-icons/Feather';
import IconDark from 'react-native-vector-icons/Feather';





const ThemeOptionsScreen = props => {
    const {theme,setTheme,toggleTheme} = useContext(ThemeContext);


    return(

   <View style = {styles.container}>
    <View style = {styles.buttonStyle}>
        <View style ={[styles.imageAndTextStyle, {marginStart:0}]}>
            <TouchableOpacity style = {styles.themeStyle} onPress={()=>{toggleTheme('light')}}>
            <IconLight  size={100} name="sun" />
            </TouchableOpacity>

            <Text style= {styles.textStyle}>Light Theme</Text>
        </View>
        
        <View style = {styles.imageAndTextStyle}>
            <TouchableOpacity style = {styles.themeStyle} onPress={()=>{toggleTheme('dark')}}>
            <IconDark size={100} name="moon" />
            </TouchableOpacity>
            <Text style= {styles.textStyle}>Dark Theme</Text>
        </View>
    </View>
    
   </View>

    );

};
const styles = StyleSheet.create({
   container:{
    width:'100%',
    height:'100%',
    justifyContent:'center'
   },
   buttonStyle:{
    flexDirection:'row',
    alignSelf:'center'
   },
   themeStyle:{
   justifyContent:'center',
   alignItems:'center',
    width:150,
    height:150
   },
   textStyle:{
    fontSize:16,
    fontWeight:'bold'
   },
   imageAndTextStyle:{
    marginStart:50,
    alignItems:'center'
   }
});
export default ThemeOptionsScreen;