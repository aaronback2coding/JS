import React, { useContext, useState } from 'react';
import { Context } from '../context/BlogContext';
import BlogForm from '../Components/BlogForm';


const EditScreen = ({ navigation }) => {
    const { state, updateBlogPost } = useContext(Context);
    let id = navigation.getParam('id');
    let item = state.find(item => {
        return item.id === id
    });
    return (
        <BlogForm
            onSubmit={
                (title, content) => updateBlogPost(id, title, content, () => navigation.navigate('Index'))
            }
            initValues={item}
        />
    );
    return <BlogForm />

};
export default EditScreen;

