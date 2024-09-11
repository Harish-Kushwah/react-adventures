import { useContext, useRef } from "react";
import { PostList as pl } from "../store/post-list-store";
const CreatePost = () => {

  const {addPost} = useContext(pl)

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event)=>{
    event.preventDefault();

    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(",")
    addPost(userId,postTitle,postBody,reactions,tags);
  }

  return (
    <form className="createPost" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
         Enter Your user id
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="user-id"
          placeholder="Your User Id"
        />
        
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="How are you feeling today?"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post content
        </label>
        <textarea
          id="content"
          ref={postBodyElement}
          placeholder="Tell us more about it"
          className="form-control"
        />
        
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
         Number of reactionsElement
        </label>
        <input
          type="number"
          ref={reactionsElement}
          className="form-control"
          id="title"
          placeholder="How many people reacted to this post?"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Enter your hashtagsElement here
        </label>
        <input
          type="text"
          ref={tagsElement}
          id="tagsElement"
          placeholder="please enter tagsElement using  , seperated"
          className="form-control"
        />
        
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default CreatePost;
