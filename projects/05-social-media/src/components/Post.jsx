/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./Post.module.css";
import { MdDelete } from "react-icons/md";
import {PostList as pl} from "../store/post-list-store"

// eslint-disable-next-line react/prop-types
const Post = ({ post }) => {
  const {deletePost} = useContext(pl);
  return (
    <>
      <div className="card post-card">
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span className="position-absolute top-0 start-100 translate-middle badge  bg-danger" onClick={()=>{deletePost(post.id)}}>
              {/* {post.reactions} */}
              <MdDelete />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>

          {post.tags.map((tag) => (
            <span className="badge text-bg-primary hashtag" key={tag} > 
              {tag}
            </span>
          ))}

          <div className="alert alert-success reactions" role="alert">
           This post has reached reactions up to <b>{post.reactions.likes}</b> peoples
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
