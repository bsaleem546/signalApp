import React, { Component, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

const CustomListItem = ({ id, chatName, enterChat }) => {

    const [chatMessages, setChatMessages] = useState()

    return (
        <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
            <TouchableOpacity>
                <Avatar
                    rounded
                    source={{
                        uri: "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
                    }}
                />
            </TouchableOpacity>  

                <ListItem.Content>
                    <ListItem.Title style={{ fontWeight: "800" }}>
                        {chatName}
                    </ListItem.Title>
                    <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
                        Subtitle
                    </ListItem.Subtitle>
                </ListItem.Content>
        </ListItem>
    )
}
export default CustomListItem;
