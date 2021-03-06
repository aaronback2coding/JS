import React, { useContext, useEffect } from 'react';
import { Text, Button, FlatList, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Context } from '../context/BlogContext';

const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

    useEffect(
        () => {
            getBlogPosts();
        },
        []
    );


    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={state}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Blog', { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>
                                    {item.title}
                                </Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather style={styles.icon} name="trash" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>

                    );
                }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});
export default IndexScreen;

