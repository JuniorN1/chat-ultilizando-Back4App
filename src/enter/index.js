import React, { useState, useCallback, useEffect } from 'react';
import { Image, Linking, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import logo from '../img/logo.png'
export default function Enter(){

    return(
        <SafeAreaView>
            <View>
                <Image source={logo} />
            </View>
            <View>
                <Text></Text>
                <View>
                <FontAwesome name="user" size={24} color="#5a38fd" />
                    <TextInput placeholder="Nome do Usuario:" />

                </View>
                <TouchableOpacity>
                    <Text>Entrar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}