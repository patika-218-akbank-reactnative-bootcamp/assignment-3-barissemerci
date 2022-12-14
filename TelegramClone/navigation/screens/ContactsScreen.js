import React, {useContext} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import SearchBar from '../../components/SearchBar';
import ContactCard from '../../components/ContactCard';
import {MessagesContext} from '../../context/messages';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../../context/theme';

var conversation;

const ContactScreen = () => {
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

  const renderItem = ({item}) => (
    <ContactCard
      id={item.id}
      name={item.firstName}
      surname={item.lastName}
      profilePhoto={item.profilePhoto}
      lastSeen={item.lastSeen}
      onPress={navigateChatScreen}
    />
  );

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
export default ContactScreen;
