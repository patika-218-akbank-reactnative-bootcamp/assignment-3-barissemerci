import React, {useContext} from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, FlatList,Text, Image } from 'react-native';
import IconBack from 'react-native-vector-icons/Ionicons';
import IconCall from 'react-native-vector-icons/MaterialIcons';
import IconMenu from 'react-native-vector-icons/Entypo';
import InputView from '../../components/InputView';
import { ThemeContext } from '../../context/theme';
import Moment from 'moment';
import 'moment/locale/tr';
import {useNavigation} from '@react-navigation/native';
import { MessagesContext } from '../../context/messages';
import IconCheck from 'react-native-vector-icons/Ionicons';






const ChatScreen = props => {

  const navigation = useNavigation();

  
   const {theme,setTheme,toggleTheme} = useContext(ThemeContext);
   const {messages, setMessages,addNewMessages} = useContext(MessagesContext);




   function navigateChatsScreen() {
    navigation.navigate('ChatsScreen');
  }

    const renderItem = ({ item,index }) => {
   
        if(item.image){ //resimse 
          return (
            <View
              style={item.isMine === 1 ? styles.myImageBox : styles.imageBox}>
              <Image style={styles.image} source={{uri: item.image}} />
              <View>
                <Text
                  style={
                    item.isMine === 1
                      ? styles.myTimeTextImage
                      : styles.timeTextImage
                  }>
                  {Moment(item.datetime).format('HH:mm')}
                </Text>
                {item.isMine === 1 && (
                  <IconCheck
                    style={styles.iconImage}
                    size={20}
                    name="checkmark-done"
                  />
                )}
              </View>
            </View>
          );
        }
        else{ //yazıysa
          return( <View style = {item.isMine===1 ? styles.myMessageBox: styles.messageBox} >
            <Text style = {styles.messageStyle}>{item.text}</Text>
            <Text style = {styles.timeStyle}>{Moment(item.datetime).format('HH:mm')}</Text>
        </View>)


        }




      
        
    };
  

    return(

   <View style = {styles.container}>
    <View style = {styles.headerStyle}>
        <TouchableOpacity onPress={navigateChatsScreen} style = {styles.backButtonStyle}>
        <IconBack color={'white'} size={40} name="arrow-back"/>
        </TouchableOpacity>
        <Image style = {styles.imageStyle}  source={{uri:props.route.params.userProfilePhoto}}  />
        <Text style = {styles.textNameStyle}>{props.route.params.userName} {props.route.params.userSurname}</Text>
        <View style = {styles.buttonsStyle}>
            <TouchableOpacity style = {[styles.backButtonStyle,{marginEnd:10}]}>
            <IconCall color={'white'} size={30} name="call"/>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.backButtonStyle}>
            <IconMenu color={'white'} size={25} name="dots-three-vertical"/>
            </TouchableOpacity>
        </View>
    </View>

    <FlatList data={props.route.params.userMessages}
        renderItem={renderItem}
        keyExtractor={(item,index) => index}
        style={styles.flatListStyle}
        >
        
    </FlatList>
    <InputView id={props.route.params.userId} onPress={addNewMessages}></InputView>

   </View>

    );

};
const styles = StyleSheet.create({
   container:{
    backgroundColor:'#0088cc',
    width:'100%',
    height:'100%'
   },
   headerStyle:{
    marginStart:10,
    marginTop:5,
    flexDirection:'row',
    alignItems:'center',
    marginEnd:10,
    marginBottom:10

   },
   flatListStyle:{
    backgroundColor:'#21cb5c',
paddingTop:5,
    marginBottom:50
   },
   imageStyle:{
    width:50,
    height:50,
    borderRadius:25,
    marginStart:10
   },
   textNameStyle:{
    fontWeight:'bold',
    fontSize:18,
    color:'white',
    marginStart:15
   },
   backButtonStyle:{
    width:50,
    height:50,
    alignItems:'center',
    justifyContent:'center'
   },
   buttonsStyle:{
    position:'absolute',
    right:0,
    flexDirection:'row',
   },
   messageBox:{
    backgroundColor:'white',
    marginBottom:5,
    marginStart:10,
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 10,
   },
   messageStyle:{
    fontWeight:'500'
   },
   timeStyle:{
    fontSize:12,
    alignSelf:'flex-end',
   },
   myMessageBox:{
    backgroundColor:'#9df1ba',
    marginBottom:5,
    marginEnd:10,
    alignSelf: 'flex-end',
    padding: 5,
    borderRadius: 10,
   },
   myImageBox:{
    backgroundColor: '#9df1ba',
    marginBottom: 4,
    alignSelf: 'flex-end',
    padding: 5,
    borderRadius: 10,
    marginTop: 5,
    marginRight: 10,
   },
   imageBox:{
    backgroundColor: 'white',
    marginBottom: 4,
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 10,
   },
   image:{
    width: 200,
    height: 300,
   },
   myTimeTextImage:{
    position: 'absolute',
    marginTop: -23,
    right: 30,
    color: 'white',
   },
   timeTextImage:{
    position: 'absolute',
    marginTop: -23,
    right: 10,
    color: 'white',
   },
   iconImage:{
    position: 'absolute',
    marginTop: -24,
    right: 5,
    color: 'white',
   }
  
});
export default ChatScreen;