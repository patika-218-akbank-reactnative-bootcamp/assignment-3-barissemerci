import *as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SettingsScreen from './screens/SettingsScreen';
import ThemeOptionsScreen from './screens/ThemeOptionsScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import LoginPage from './screens/LoginPage';

const Stack = createNativeStackNavigator();

export default function SettingsContainer() { 
    return(

        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
          <Stack.Screen name="ThemeOptionsScreen" component={ThemeOptionsScreen} />
          <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />

        </Stack.Navigator>
    )
    }