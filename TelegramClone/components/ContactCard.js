import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, {useContext} from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text, Image } from 'react-native';
import Moment from 'moment';
import 'moment/locale/tr';
import { ThemeContext } from '../context/theme';


const ContactCard = ({onPress,id,name,surname,profilePhoto,lastSeen}) => {

    const {theme,setTheme,toggleTheme} = useContext(ThemeContext);

    return(

   <TouchableOpacity style = {[styles.container,{backgroundColor:theme.backgroundColor}]} onPress={() => {
    onPress(id,name,surname,profilePhoto);
  }}>
        <Image style = {styles.imageStyle}  source={{uri:profilePhoto}}  />
        <View style = {styles.nameAndMessageStyle}>
            <Text style = {[styles.textNameStyle,{color:theme.fontColor}]}>{name} {surname}</Text>
            <Text style = {[styles.textMessageStyle,{color:theme.fontColor}]}>{Moment(lastSeen).format('HH:mm')}</Text>
        </View>
   </TouchableOpacity>

    );

};
const styles = StyleSheet.create({
   container:{
    alignItems:'center',
    height:65,
   flexDirection:'row',
    marginRight:10,
    marginLeft:10,
    borderBottomWidth:0.
},
   imageStyle:{
    width:50,
    height:50,
    borderRadius:25,
    marginStart:5,
    marginEnd:10
   },
   textNameStyle:{
    fontWeight:'bold',
    fontSize:16
   },
   nameAndMessageStyle:{
    alignSelf:'flex-start',
    marginTop:15,
   }
});
export default ContactCard;