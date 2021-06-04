import PostTypes from './post.types';

const INTIAL_STATE = {
    newPost: {},
    newPostError: {},
    postId: null
}

const postReducer = (state = INTIAL_STATE, action) => {
    console.log('New posts', action);

    switch (action.type) {
        case PostTypes.NEW_POST:
            return {...state, newPost: action.payload};
        case PostTypes.NEW_POST_ERROR: 
            return {...state, newPostError: action.payload};
        case PostTypes.VIEW_POST:
            return{ ...state, postId: action.payload};
        default: 
            return state;
    }
};


export default postReducer;