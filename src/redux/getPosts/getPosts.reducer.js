import GetPostTypes from './getPosts.types';

const INTIAL_STATE ={
    posts: [],
    getPostError: {}
}


const getPostReducer = (state = INTIAL_STATE, action) => {
    console.log('get posts', action);

    switch (action.type) {
        case GetPostTypes.GET_ALL_POST:
            return {...state, posts: action.payload};
        case GetPostTypes.GET_SINGLE_POST:
            return{...state, posts: action.payload};
        case GetPostTypes.GET_POSTS_ERROR: 
            return {...state, postError: action.payload};
        default: 
            return state;
    }
};


export default getPostReducer;