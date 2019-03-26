import React from 'react';
import './PostContent.css';
import CommentList from './CommentList';

const PostContent = ({title,body,comments}) => {


    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
        <div>
            <CommentList comments={comments}/>
        </div>
        </div>
    );
};

export default PostContent;