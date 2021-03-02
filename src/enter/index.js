import React, { useState, useCallback, useEffect } from 'react';
import { Image, Linking, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import './styles.js'
import logo from '../img/logo.png'
import styles from './styles.js';
export default function Enter(){
    return(
        <SafeAreaView style={styles.container}>
            <View  style={styles.imageContainer}>
                <Image source={logo} />
            </View>
            <View>
                <Text style={styles.labelInputContainer}>Entre com seu nome:</Text>
                <View style={styles.inputContainer}>
                    <FontAwesome name="user" style={styles.iconInputContainer} />
                    <TextInput 
                        style={styles.inputEnter} 
                        placeholder="Nome do Usuario"
                        placeholderTextColor="#4a1fff" 
                    />
                </View>
                <TouchableOpacity style={styles.buttonEnter}>
                    <Text style={styles.textEnterButton}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}