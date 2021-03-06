
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
      applicationId:process.env.KeyApp,
      serverURL:process.env.serverURL,
      javaScriptKey:process.env.javaScriptKey
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
  Parse.initialize(process.env.KeyApp,process.env.javaScriptKey); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
  Parse.serverURL = 'https://parseapi.back4app.com/';
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));

    const Chats = Parse.Object.extend("message");
    const chat = new Chats();

    chat.set("text",messages[0].text);
    chat.set("name",name);

    chat.save()
    .then((object) => {
   
    //   console.log('New object created with objectId: ' + object.id);
    }, (error) => {
 
    //   console.log('Failed to create new object, with error code: ' + error.message);
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
