import axios from 'axios';
import PostTypes from './post.types';


export const post = (payload) => ({
    type: PostTypes.NEW_POST,
    payload
});

export const newPostError = payload => ({
    type: PostTypes.NEW_POST_ERROR,
    payload
})


export const postId = payload => ({
    type: PostTypes.VIEW_POST,
    payload
})
   


//thunk

export const newPostThunk = (post) => {
    return async (dispatch) => {
        console.log('from post thunk ', post)

        try{
            const {data} = await axios.post('http://localhost:8000/api/post/createpost', post)
            console.log('data from post', data)
            dispatch(post(data));
        } catch(error){
            console.error(error);
        }
    }
}


