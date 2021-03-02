import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer}  from '@react-navigation/native'
import{createStackNavigator} from '@react-navigation/stack';
const {Navigator,Screen} = createStackNavigator();
import Enter from './enter';
import Chat from './chat';
export default function App() {
    return (
        <NavigationContainer >
            <StatusBar hidden={false}/>
            <Navigator screenOptions={{headerShown:false}}>
                <Screen component={Enter} name="Enter"/>
                <Screen component={Chat} name="Chat"/>
            </Navigator>
        </NavigationContainer>
    )
}