
import { View, Text } from 'react-native'
import React from 'react'
import { UserContext } from '../context/user';
import ChatScreen from './screens/ChatScreen';
import LoginPage from './screens/LoginPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabContainer from './BottomTabContainer';



const Stack = createNativeStackNavigator();
const MainStackNavigator = () => {
    const {user,setUser} = React.useContext(UserContext);

  return (
    <Stack.Navigator
screenOptions={{
  headerShown: false,
}}>


 
        <React.Fragment>{
          user===null ?
          <Stack.Screen name="LoginPage" component={LoginPage} /> : 
          (<React.Fragment><Stack.Screen name="BottomTabContainer" component={BottomTabContainer} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} /></React.Fragment>) 

        }</React.Fragment>
     
    

  

</Stack.Navigator>
  )
}

export default MainStackNavigator


