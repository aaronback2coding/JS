import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (blogList, action) => {
    switch (action.type) {
        case 'add':
            return [...blogList, action.payload];
        case 'delete':
            return blogList.filter(item => item.id !== action.payload.id);
        case 'update':
            return blogList.map(
                item => (item.id === action.payload.id) ? action.payload : item
            );
        case 'get':
            return action.payload;
        default:
            return [...blogList];
    }
};

const genID = function () {
    return (((1 + Math.random()) * 0x1000000) | 0).toString(16).substring(1);
};

// this is actually a function factory
// add post
//     do something
//     then dispatch 

const addBlogPost = dispatch => {
    let id = genID();
    return (
        //send it to the network, and update the local and view.
        (title, content, callback) => {
            dispatch({
                type: 'add',
                payload: { id, title, content }
            });
            if (callback)
                callback();
        }
    );
};

const deleteBlogPost = dispatch => {
    return (
        (id) => dispatch(
            {
                type: 'delete',
                payload: { id },
            }
        )
    );
};

const updateBlogPost = dispatch => {
    return (
        (id, title, content, callback) => {
            dispatch({
                type: 'update',
                payload: { id, title, content }
            });
            if (callback)
                callback();
        }

    );
};

const getBlogPosts = dispatch => {
    return (
        async () => {
            try {
                const response = await jsonServer.get('/blogposts');
                dispatch({
                    type: 'get',
                    payload: response.data
                });
            }
            catch (e) {
                console.log(e);
            }
        }
    );
};




export const { Context, Provider } = createDataContext(
    blogReducer,
    {
        addBlogPost: addBlogPost,
        deleteBlogPost: deleteBlogPost,
        updateBlogPost: updateBlogPost,
        getBlogPosts: getBlogPosts,

    },
    [{ id: 1234, title: 'test post', content: 'test post content' }],
);

