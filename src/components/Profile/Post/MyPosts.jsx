import React from 'react';
import classes from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={classes.content}>
            <div>
                My posts
            </div>
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
                <button>Delete Post</button>
            </div>
            <div className={classes.posts}>
                <Post message = "Hi" likes="25"/>
                <Post message = "Hello" likes = "50"/>
            </div>
        </div>
    );
}

export default MyPosts;
