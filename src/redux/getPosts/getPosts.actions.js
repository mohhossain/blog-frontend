import axios from 'axios';
import GetPostTypes from './getPosts.types';


export const getPosts = (payload) => ({
    type: GetPostTypes.GET_ALL_POST,
    payload
});

export const getSinglePost = (payload) => ({
    type: GetPostTypes.GET_SINGLE_POST,
    payload
})

export const getPostError = payload => ({
    type: GetPostTypes.GET_POSTS_ERROR,
    payload
})
   


//thunk


export const getAllPostsThunk = () => {
    return async (dispatch) => {
        console.log ('from thunk', dispatch)

        try{
            const { data } = await axios.get('http://localhost:8000/api/post/getallpost')
            dispatch(getPosts(data));
        } catch(error) {
            console.error(error);

        }

    }
}


export const getPublicPostsThunk = (visibility) => {
    return async (dispatch) => {
        console.log ('from thunk', dispatch)

        try{
            const { data } = await axios.get('http://localhost:8000/api/post/getpost/')
            dispatch(getPosts(data));
        } catch(error) {
            console.error(error);

        }

    }
}

export const getSinglePostsThunk = (id) => {
    return async (dispatch) => {
        console.log ('from singleeeeeeee thunk', id)

        try{
            const { data } = await axios.get('http://localhost:8000/api/post/getpost/?id=', id+1)
            dispatch(getSinglePost(data));
        } catch(error) {
            console.error(error);

        }

    }
}