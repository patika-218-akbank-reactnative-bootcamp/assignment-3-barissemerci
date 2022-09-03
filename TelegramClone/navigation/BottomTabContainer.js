import React, {useContext} from 'react';
import {ThemeContext} from '../context/theme';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatsScreen from './screens/ChatsScreen';
import ContactsScreen from './screens/ContactsScreen';
import IconContact from 'react-native-vector-icons/AntDesign';
import IconChat from 'react-native-vector-icons/Entypo';
import IconSettings from 'react-native-vector-icons/Feather';

import SettingsContainer from './SettingsContainer';

const Tab = createBottomTabNavigator();

export default function BottomTabContainer() {
  const {theme} = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: theme.bottomTabColor},
        tabBarActiveTintColor: theme.active,
        tabBarInactiveTintColor: theme.fontColor,
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({size}) => (
            <IconContact name="contacts" color={theme.fontColor} size={size} />
          ),
        }}
        name={'ContactsScreen'}
        component={ContactsScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color, size}) => (
            <IconChat name="chat" color={theme.fontColor} size={size} />
          ),
        }}
        name={'ChatsScreen'}
        component={ChatsScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <IconSettings name="settings" color={theme.fontColor} size={size} />
          ),
        }}
        name={'SettingsContainer'}
        component={SettingsContainer}
      />
    </Tab.Navigator>
  );
}
