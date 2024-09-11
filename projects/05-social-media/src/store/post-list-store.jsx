import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts:()=>{}
};

export const PostList = createContext(DEFAULT_CONTEXT);

const postListReducer = (currentPostList, action) => {
    let newPostList = currentPostList;
    if(action.type==="DELETE_POST"){
        newPostList = currentPostList.filter(post=> post.id !== action.payload.postId )
    }
    else if(action.type==="ADD_POST"){
         newPostList = [
          {
            id: Date.now(),
            title: action.payload.postTitle,
            body: action.payload.postBody,
            reactions: action.payload.reactions,
            userId: action.payload.userId,
            tags: action.payload.tags,
         },...currentPostList,]
    }
    else if(action.type ==="ADD_INITIALS_POSTS"){
          newPostList = action.payload.posts;
    }
    
    return newPostList;
};
// eslint-disable-next-line react/prop-types
const PostListProvider = ({ children }) => {
  const addPost = (userId,postTitle,postBody,reactions,tags) => {
    
    dispatchPostList({
      type:"ADD_POST",
      payload:{
        userId,
        postTitle,
        postBody,
        reactions,
        tags
      }
    })
  };
  const addInitialPosts = (posts) => {
    
    dispatchPostList({
      type:"ADD_INITIALS_POSTS",
      payload:{
        posts,
      }
    })
  };


  const deletePost = (postId) => {
   dispatchPostList({
    type:"DELETE_POST",
    payload:{
        postId
    }
   })
  };

  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        addInitialPosts:addInitialPosts
      }}
    >
      {children}
    </PostList.Provider>
  );
};



export default PostListProvider;
