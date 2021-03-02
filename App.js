
import React, { useState, useCallback, useEffect } from 'react';
import { Image, Linking, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import { AsyncStorage } from 'react-native';
import Parse from 'parse/react-native.js';
export default function App() {
  const [messages, setMessages] = useState([]);

 
  Parse.setAsyncStorage(AsyncStorage);
  Parse.initialize("ZdeOc2OKVbRCLb8wiUHEa6oWxRCjrf3pY89xLuEm","Fe1Bn8OxU2Q8Az0EuzHPctZfK0i3KgXnkNDHSxuW"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/';
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    console.log(messages);
    // const MyFirstClass = Parse.Object.extend("MyFirstClass");
    // const myFirstClass = new MyFirstClass();

    // myFirstClass.set("name", "I'm able to save objects!");
    // myFirstClass.save()
    // .then((object) => {
    //   // Success
    //   console.log('New object created with objectId: ' + object.id);
    // }, (error) => {
    //   // Save fails
    //   alert('Failed to create new object, with error code: ' + error.message);
    // });
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}
