import { combineReducers } from 'redux';

// Reducers
import playerReducer from './player/player.reducer';
import getPostReducer from './getPosts/getPosts.reducer';
import postReducer from './post/post.reducer';

const rootReducer = combineReducers({
  players: playerReducer,
  posts: getPostReducer,
  newPost: postReducer
});

export default rootReducer;
