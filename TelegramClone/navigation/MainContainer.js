import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import ThemeProvider from '../provider/ThemeProvider';
import UserProvider from '../provider/UserProvider';
import MessagesProvider from '../provider/MessagesProvider';
import MainStackNavigator from './MainStackNavigator';

export default function MainContainer() {
  return (
    <NavigationContainer>
      <UserProvider>
        <ThemeProvider>
          <MessagesProvider>
            <MainStackNavigator />
          </MessagesProvider>
        </ThemeProvider>
      </UserProvider>
    </NavigationContainer>
  );
}
