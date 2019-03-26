import React from 'react';
import PostNav from './PostNav';
import PostContent from './PostContent';

const PostWrap = ({onClick, postId, disabled, title, body, comments}) => {
    return (
      
        <div>
            <div>
            <PostNav
            onClick={onClick}
            postId={postId}
            dsabled={disabled}
                />
            </div>
            <PostContent 
            title={title}
            body={body}
            comments={comments}/>
        </div>
       
    );
};

export default PostWrap;