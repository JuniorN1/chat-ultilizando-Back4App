import React, { useState, useCallback, useEffect } from 'react';
import { Image, Linking, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import './styles.js'
import logo from '../img/logo.png'
import styles from './styles.js';
export default function Enter(){
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Image source={logo} />
            </View>
            <View>
                <Text>Entre com seu nome:</Text>
                <View style={styles.inputContainer}>
                    <FontAwesome name="user" size={24} color="#5a38fd" />
                    <TextInput style={styles.inputEnter} placeholder="Nome do Usuario:" />
                </View>
                <TouchableOpacity>
                    <Text>Entrar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}