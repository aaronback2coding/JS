import React, { useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';


const BlogScreen = ({ navigation }) => {
    let id = navigation.getParam('id');
    const { state } = useContext(Context);
    let blog = state.find(item => {
        return item.id === id
    });

    return (
        <View>
            <Text style={{ fontSize: 30 }}>{blog.title}</Text>
            <Text style={{ fontSize: 30 }}>Content: </Text>
            <Text style={{ fontSize: 30 }}>{blog.content}</Text>
        </View>
    );
};

BlogScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
                <EvilIcons name="pencil" size={35} />
            </TouchableOpacity>
        )
    };
};


export default BlogScreen;
