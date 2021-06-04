import React, { Component } from 'react'
import { connect } from 'react-redux';
import {newPostThunk} from '../../../redux/post/post.actions';
import {getPublicPostsThunk} from '../../../redux/getPosts/getPosts.actions';
import './styles/CreatePost.css'
class CreatePost extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            post: '',
            visibility: 'public'
        }
    }


    handleInputChange = (e) =>{
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value 

        })

        console.log('from input ',this.state.title, this.state.post, this.state.visibility)
    }

    handleVisChange = (e) => {
        this.setState({
            visibility: e.target.value
        })
    }

    
    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            title: this.state.title,
            post: this.state.post,
            visibility: this.state.visibility
        }) 

        const post = {

            title: this.state.title,
            postText: this.state.post,
            visibility: this.state.visibility,
            user: 'Best Writer'
            
        }

        console.log('from submit ',this.state.title, this.state.post, this.state.visibility)


        this.props.newPostThunk(post);
        this.props.getPublicPostsThunk();

        this.props.history.push("/");
    }






    render() {

        const {title} = this.state;
        const {post} = this.state;
        return (
            <div>
                <form className="postForm" onSubmit={this.handleSubmit}>
                    <p className="time">Time: {Date()}</p>
                    <h3>{title}</h3>
                    <input className="tInput" type='text' onChange={this.handleInputChange} placeholder='Enter post title' name='title'></input>
                    <br></br>
                    <p>{post}</p>
                    <input className="pInput" type='text' onChange={this.handleInputChange} placeholder='Write your post' name='post'></input>
                    <br></br>
                    <label>Visibility: </label>
                    <select onChange={this.handleVisChange} name='visibility'>
                        <option>Public</option>
                        <option>Private</option>
                    </select>
                    <br></br>
                    <input type='submit'></input>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        newPost: state.newPost
    }
)

export default connect(
    mapStateToProps, {getPublicPostsThunk, newPostThunk}
)(CreatePost);
