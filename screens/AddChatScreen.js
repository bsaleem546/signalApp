import React, { Component, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import { auth, db } from '../firebase';

const AddChatScreen = ({ navigation }) => {

    const [input, setInput] = useState('')

    const createChat = async () => {
        await db.collection('chats').add({
            chatName: input
        }).then(() => {
            navigation.goBack();
        }).catch((err) => alert(err));
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Add a new chat',
            headerBackTitle: 'Chats',

        })
    }, [navigation]) 

    return (
      <View style={styles.container}>

            <Input placeholder='Enter a chat name' value={input} onChangeText={(text) => setInput(text)} 
                onSubmitEditing={createChat} />
            <Button onPress={createChat} title='Create new chat' />
      </View>
    );
}

export default AddChatScreen;
    

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        padding: 30,
        height: '100%'
    }
});