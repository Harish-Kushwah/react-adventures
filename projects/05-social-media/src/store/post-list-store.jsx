import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
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


  const deletePost = (postId) => {
   dispatchPostList({
    type:"DELETE_POST",
    payload:{
        postId
    }
   })
  };

  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi friends i am going to mumbai for my vacations Hope to enjoy alot",
    reactions: 10,
    userId: "1",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Going to Pune",
    body: "Hi friends i am going to Pune for my interview Hope to enjoy alot",
    reactions: 23,
    userId: "2",
    tags: ["lets crack"],
  },
];

export default PostListProvider;
