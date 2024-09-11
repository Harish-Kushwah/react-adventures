import Post from "./Post";
import {PostList as pl} from "../store/post-list-store"
import { useContext } from "react";
import WelcomeMessage from "./WelcomeMessage";
// import LoadingSpinner from "./LoadingSpinner";
import PropagateLoader from "react-spinners/PropagateLoader";
const PostList = ()=>{
    const {postList,fetching} = useContext(pl);
    return <>
    {fetching && <PropagateLoader color="#1847c9" size={25} />}
    {!fetching && postList.length===0 && <WelcomeMessage ></WelcomeMessage>}
    {!fetching && postList.map((post)=><Post key={post.id} post={post}/>)}
    </>
}
export default PostList;