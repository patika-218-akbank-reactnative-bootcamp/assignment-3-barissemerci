import *as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabContainer from './BottomTabContainer';
import ChatScreen from './screens/ChatScreen';
import LoginPage from './screens/LoginPage';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ThemeProvider from '../provider/ThemeProvider';
import UserProvider from '../provider/UserProvider';
import { UserContext } from '../context/user';
import MessagesProvider from '../provider/MessagesProvider';
import MainStackNavigator  from './MainStackNavigator';



const Stack = createNativeStackNavigator();


export default function MainContainer() {

  const {user,setUser} = React.useContext(UserContext);

    return(

       <NavigationContainer >
       <UserProvider>
          <ThemeProvider>
            <MessagesProvider>
              <MainStackNavigator>

              </MainStackNavigator>
           
         
        </MessagesProvider>
        </ThemeProvider>
        </UserProvider>
       </NavigationContainer>
    )
    
}