import Post from "./Post";
import {PostList as pl} from "../store/post-list-store"
import { useContext } from "react";
const PostList = ()=>{
    const {postList} = useContext(pl);
    return <>
    {postList.map((post)=><Post key={post.id} post={post}/>)}
    </>
}
export default PostList;