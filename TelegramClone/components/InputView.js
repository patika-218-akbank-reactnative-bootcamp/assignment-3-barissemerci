/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-localSS
 */

import React, { useState } from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import IconSmiley from 'react-native-vector-icons/Fontisto';
import IconAttach from 'react-native-vector-icons/Entypo';
import IconSend from 'react-native-vector-icons/Ionicons';
import IconMicrophone from 'react-native-vector-icons/MaterialCommunityIcons';

const InputView = ({onPress,id}) => {
  const [focus,setFocus]=useState(0)
  const [text,setText]=useState('')
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <IconSmiley style={styles.icon} size={27} name="smiley" />
        <TextInput
        onChangeText={(text)=>{
      
          if(text===''){
            setFocus(0)
           
          }
          else{
            setFocus(1)
          }
          setText(text)



        }}
          multiline={true}
          value={text}
          placeholder="Mesaj"
          style={styles.textInput}
        />

        {focus===0 ?  <View style={styles.icons}>
          <IconAttach style={styles.iconAttach} size={25} name="attachment" />
          <IconMicrophone
          style={styles.microphoneIcon}
          size={30}
          name="microphone"
        />
        </View> : 
        <View style={styles.icons}>
        <IconSend style={styles.iconAttach} size={25} name="send" onPress={()=>{

           

              onPress(text,id)
              setText('')
        }}/>
      </View>


        
        
        }

       
      </View>

    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    flexDirection: 'row',
  },
  inputContainer: {
    width: '90%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  textInput: {
    flex: 1,
  },
  icon: {
    marginRight: 5,
    marginLeft: 10,
  },
  iconAttach: {
    marginRight: 15,
    alignSelf:'center'
  },
  icons: {
    flexDirection: 'row',
    marginRight: 15,
  },
  microphoneButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#008069',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  
});

export default InputView;
