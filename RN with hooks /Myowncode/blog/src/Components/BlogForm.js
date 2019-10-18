import React, { useContext, useState } from 'react';
import { Text, TextInput, Button, StyleSheet, View } from 'react-native';
import { Context } from '../context/BlogContext';


const BlogForm = ({ onSubmit, initValues }) => {
    const [title, setTitle] = useState(initValues.title);
    const [content, setContent] = useState(initValues.content);
    return (
        <View>
            <Text style={styles.label}>Title</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={(newValue) => setTitle(newValue)}
            />
            <Text style={styles.label}>Content</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={(newValue) => setContent(newValue)}
            />
            <Button
                onPress={() => onSubmit(title, content)}
                title="Submit" />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});
export default BlogForm;
