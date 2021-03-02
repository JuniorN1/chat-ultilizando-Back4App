
import React, { useState, useCallback, useEffect } from 'react';
import { Image, Linking, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import { AsyncStorage } from 'react-native';
import Parse from 'parse/react-native.js';
import { useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import styles from './styles.js';
export default function Chat() {
    const router = useRoute();
    const [messages, setMessages] = useState([]);
    const name = router.params.name;

 
 

  useEffect(() => {
    const Client = new Parse.LiveQueryClient({
      applicationId:"ZdeOc2OKVbRCLb8wiUHEa6oWxRCjrf3pY89xLuEm",
      serverURL:"wss://charts.b4a.io",
      javaScriptKey:"Fe1Bn8OxU2Q8Az0EuzHPctZfK0i3KgXnkNDHSxuW"
    });
    
    Client.open();

    let query = new Parse.Query("message");

    query.ascending("createdAt");
    query.notEqualTo("name",name)
    query.limit(1);

    let subscription =Client.subscribe(query);


    subscription.on("create",messageParse=>{
   

      setMessages(previousMessages => GiftedChat.append(previousMessages, {
        _id: messageParse.id,
        createdAt: new Date(),
        text:messageParse.get("text"),
        user:{
            _id: messageParse.get("name"),
            name:messageParse.get("name"),
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
    chat.set("name",name);

    chat.save()
    .then((object) => {
      // Success
    //   console.log('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
    //   alert('Failed to create new object, with error code: ' + error.message);
    });
  }, [])
 
  return (
      <>

        <View style={styles.header}>
        {/* <MaterialCommunityIcons name="exit-run" size={24} color="black" /> */}
            <Text style={styles.textHeader}>Bem-vindo</Text>
        </View>
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            minComposerHeight={80}
            
            messagesContainerStyle={
                styles.chatStyle
            }
            user={{
                _id: name,
            }}
        />

    </>
  )
}
