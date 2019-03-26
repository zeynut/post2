import React from 'react';
import Comment from './Comment';

const CommentList = ({comments}) => {

    //let commentSlice = comments.slice(0,5); //comments 배열에서 몇개 배열만 넣기
    
    const commentList = comments.map(
        (comment, index) => (
            <Comment 
            name={comment.email.split('@')[0]}
            body={comment.body}
            key={index}
            />
        )
    );
     
    
    return (
        <div>
        <ul>    
            {commentList}
        </ul>
        </div>
    );
};

export default CommentList;