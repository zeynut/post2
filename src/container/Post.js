import React, {Component}from 'react';
import PostWrap from '../component/PostWrap';
import './Post.css';
import * as service from '../service/PostService';

class Post extends Component{
    
    constructor(props) {
        super();
        // initializes component state
        this.state = {
            postId: 1,
            fetching: false, // tells whether the request is waiting for response or not
            post: {
                title: null,
                body: null
            },
            comments: []
        };
    }
    
    componentDidMount(){

        this.fetchPostInfo(1);
    }
 
    fetchPostInfo = async (postId) => {

        this.setState({
            fetching: true // requesting..
        });

        const info = await Promise.all([
            service.getPost(postId),
            service.getComments(postId)
        ]);
    console.log(info);
    const {title, body} = info[0].data; 
                                            
    const comments = info[1].data;

    this.setState({
        postId,
        post: {
            title, 
            body
        },
        comments,
        fetching: false // done!
    });
    }

    handleNavigateClick = (type) => {
        const postId = this.state.postId;

        if(type === 'NEXT') {
            this.fetchPostInfo(postId+1);
        } else {
            this.fetchPostInfo(postId-1);
        }
    }


    render(){
        const {postId, fetching, post, comments} = this.state; // 비구조 할당
    return (
         <div className="post">
           <PostWrap
           onClick={this.handleNavigateClick}
           postId={postId}
           disabled={fetching}
           title={post.title}
           body={post.body}
           comments={comments}
           />
        </div>
    );
    }
};

export default Post;

