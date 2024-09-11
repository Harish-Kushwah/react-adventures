import { createContext, useReducer ,useState,useEffect} from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  fetching:false,
  addPost: () => {},
  deletePost: () => {},
};

export const PostList = createContext(DEFAULT_CONTEXT);

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [
      {
        id: action.payload.id,
        title: action.payload.title,
        body: action.payload.body,
        reactions: {likes:action.payload.reactions.likes},
        userId: action.payload.userId,
        tags: action.payload.tags,
      },
      ...currentPostList,
    ];
  } else if (action.type === "ADD_INITIALS_POSTS") {
    newPostList = action.payload.posts;
  }

  return newPostList;
};
// eslint-disable-next-line react/prop-types
const PostListProvider = ({ children }) => {
  
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  
  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload:post,
    
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIALS_POSTS",
      payload: {
        posts,
      },
    });
  };

  // to prevent frequent paint cycles 
  const deletePost = (postId) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    };
  // // to prevent frequent paint cycles 
  // const deletePost = useCallback(
  //   (postId) => {
  //     dispatchPostList({
  //       type: "DELETE_POST",
  //       payload: {
  //         postId,
  //       },
  //     });
  //   },
  //   [dispatchPostList]
  // );

  const [fetching,setFetching] = useState(false);
    useEffect(()=>{
        setFetching(true);

        const controller  = new AbortController();
        const signal = controller.signal;
   
        fetch('https://dummyjson.com/posts',{signal})
        .then(res => res.json())
        .then(data => {
            addInitialPosts(data.posts);
            setFetching(false);
        });

        return ()=>{
            controller.abort();
        }
    },[])


  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        addInitialPosts: addInitialPosts,
        fetching
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
