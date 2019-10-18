import React, { useContext, useState } from 'react';
import { Context } from '../context/BlogContext';
import BlogForm from '../Components/BlogForm';


const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(Context);
    return (
        <BlogForm
            onSubmit={
                (title, content) => addBlogPost(title, content, () => navigation.navigate('Index'))
            }
            initValues={{ title: '', content: '' }}
        />
    );

};
export default CreateScreen;
