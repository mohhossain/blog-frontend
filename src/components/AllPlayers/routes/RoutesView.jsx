import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CreatePost, Home } from '../views';
import PostPage from '../views/PostPage';

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/newpost" component={CreatePost}></Route>
      <Route exact path="/readpost" component={PostPage}></Route>
    </Switch>
  );
};

export default RoutesView;
