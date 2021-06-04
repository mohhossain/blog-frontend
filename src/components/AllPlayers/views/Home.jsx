import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {getPublicPostsThunk, getSinglePostsThunk} from '../../../redux/getPosts/getPosts.actions';
import {postId} from '../../../redux/post/post.actions';
import PostPage from './PostPage';

class Home extends React.Component{

    componentDidMount(){
        this.props.getPublicPostsThunk('public')
    }

    handleSubmit = e =>{

        const postId = e.target.getAttribute("data-index");

        this.props.getSinglePostsThunk(postId);

        console.log("clicked")

        console.log("post id: " , e.target.getAttribute("data-index"))

        this.props.history.push("/readpost")
        
    }

    render(){
        const posts = this.props.allposts.posts;
        console.log("posts", this.props.allposts.posts)

        const cards = []
        for(var i=0; i<posts.length;i++){
            const postId = i;
            
            cards.push(
                <div>
                    <h3 key={i}>{posts[i].title}</h3>
                    <p>{posts[i].postText}</p>
                    <p key={i} >Posted on {posts[i].date} </p>
                    <p key={i}>Author: {posts[i].user} </p>
                </div>
                )
        }
        return (
            <div>
                <h1>Home</h1>
                {cards}
            </div>
        );
        


    }
}

const mapStateToProps = (state) => ({
    allposts: state.posts
    
});

const mapDispatchToProps = (dispatch) => ({
    viewPost: (id) => dispatch(postId(id))
})

connect(mapDispatchToProps, {postId})(Home);
export default connect(
    mapStateToProps, {getPublicPostsThunk, getSinglePostsThunk}
)(Home);