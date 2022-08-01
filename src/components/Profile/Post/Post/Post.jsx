import React from 'react';
import classes from "./Post.module.css";

const Post = (props) => {
    return (
            <div className={classes.posts}>
                <div className={classes.item}>
                    <img src="https://i.ytimg.com/vi/Y5GLCBjHR8U/maxresdefault.jpg" alt="" /> 
                    {props.message}
                </div>
                <div>
                    <span>Likes: {props.likes}</span>
                </div>
        </div>
    );
}

export default Post;
