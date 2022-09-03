import React, {useContext} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import ChatCard from '../../components/ChatCard';
import SearchBar from '../../components/SearchBar';
import {useNavigation} from '@react-navigation/native';
import {MessagesContext} from '../../context/messages';
import {ThemeContext} from '../../context/theme';

var conversation;

const ChatsScreen = () => {
  const {messages} = useContext(MessagesContext);
  const {theme} = useContext(ThemeContext);

  const navigation = useNavigation();

  function findMessages(id) {
    conversation = messages.filter(item => item.id.includes(id));
  }

  function navigateChatScreen(id, firstName, surname, profilePhoto) {
    findMessages(id);
    conversation = conversation[0].messages.sort(function (a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(a.datetime) - new Date(b.datetime);
    });

    navigation.navigate('ChatScreen', {
      userId: id,
      userName: firstName,
      userSurname: surname,
      userMessages: conversation,
      userProfilePhoto: profilePhoto,
    });
  }
  const renderItem = ({item}) => {
    if (item.messages.length > 0) {
      return (
        <ChatCard
          lastMessage={item.messages[item.messages.length - 1]}
          id={item.id}
          name={item.firstName}
          surname={item.lastName}
          profilePhoto={item.profilePhoto}
          onPress={navigateChatScreen}
        />
      );
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <SearchBar />
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
export default ChatsScreen;
