
import React, { useState, useCallback, useEffect } from 'react';
import { Image, Linking, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import { AsyncStorage } from 'react-native';
import Parse from 'parse/react-native.js';
export default function App() {
  const [messages, setMessages] = useState([]);

 
 

  useEffect(() => {
    const Client = new Parse.LiveQueryClient({
      applicationId:"ZdeOc2OKVbRCLb8wiUHEa6oWxRCjrf3pY89xLuEm",
      serverURL:"wss://charts.b4a.io",
      javaScriptKey:"Fe1Bn8OxU2Q8Az0EuzHPctZfK0i3KgXnkNDHSxuW"
    });
    
    Client.open();

    let query = new Parse.Query("message");

    query.ascending("createdAt");
    query.limit(1);

    let subscription =Client.subscribe(query);
       

    subscription.on("create",messageParse=>{
   

      setMessages(previousMessages => GiftedChat.append(previousMessages, {
        _id: messageParse.id,
        createdAt: new Date(),
        text:messageParse.get("text"),
        user:{
            _id: "123",
            name:"teste",
            avatar:"https://img.icons8.com/cute-clipart/64/000000/user-male.png"
          },

      }));

    })


  }, []);

  Parse.setAsyncStorage(AsyncStorage);
  Parse.initialize("ZdeOc2OKVbRCLb8wiUHEa6oWxRCjrf3pY89xLuEm","Fe1Bn8OxU2Q8Az0EuzHPctZfK0i3KgXnkNDHSxuW"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
  Parse.serverURL = 'https://parseapi.back4app.com/';
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));

  
    const Chats = Parse.Object.extend("message");
    const chat = new Chats();

    chat.set("text",messages[0].text);
    chat.set("id",1);
    chat.save()
    .then((object) => {
      // Success
      console.log('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
      alert('Failed to create new object, with error code: ' + error.message);
    });
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
