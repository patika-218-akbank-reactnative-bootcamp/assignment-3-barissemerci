import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import Moment from 'moment';
import 'moment/locale/tr';
import {ThemeContext} from '../context/theme';

const ChatCard = ({lastMessage, onPress, name, surname, profilePhoto, id}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        onPress(id, name, surname, profilePhoto);
      }}>
      <Image style={styles.imageStyle} source={{uri: profilePhoto}} />
      <View style={styles.nameAndMessageStyle}>
        <Text style={[styles.textNameStyle, {color: theme.fontColor}]}>
          {name} {surname}
        </Text>
        <Text style={[styles.textMessageStyle, {color: theme.fontColor}]}>
          {lastMessage.text}
        </Text>
      </View>
      <Text style={[styles.textTime, {color: theme.fontColor}]}>
        {Moment(lastMessage.datetime).format('HH:mm')}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 100,
    flexDirection: 'row',
    marginRight: 10,
    marginLeft: 10,
    borderBottomWidth: 0.7,
    borderBottomColor: 'gray',
  },
  imageStyle: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    marginStart: 5,
    marginEnd: 10,
  },
  textNameStyle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  nameAndMessageStyle: {
    alignSelf: 'flex-start',
    marginTop: 15,
  },
  textTime: {
    alignSelf: 'flex-start',
    marginTop: 15,
    position: 'absolute',
    right: 10,
  },
});
export default ChatCard;
