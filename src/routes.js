import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer}  from '@react-navigation/native'
import{createStackNavigator} from '@react-navigation/stack';
const {Navigator,Screen} = createStackNavigator();
import Enter from './enter'
export default function App() {
    return (
        <NavigationContainer >
            <StatusBar hidden={false}/>
            <Navigator screenOptions={{headerShown:false}}>
                <Screen component={login} name="login"/>
                </Navigator>
                </NavigationContainer>
    )
}