import Post from "./Post";
import {PostList as pl} from "../store/post-list-store"
import { useContext ,useEffect,useState} from "react";
import WelcomeMessage from "./WelcomeMessage";
// import LoadingSpinner from "./LoadingSpinner";
import PropagateLoader from "react-spinners/PropagateLoader";
const PostList = ()=>{
    const {postList,addInitialPosts} = useContext(pl);

    const [fetching,setFetching] = useState(false);
   
   
    useEffect(()=>{
        setFetching(true);
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data => {
            addInitialPosts(data.posts)
            setFetching(false);
        });
    },[])
    return <>
    {fetching && <PropagateLoader color="#1847c9" size={30} />}
    {!fetching && postList.length===0 && <WelcomeMessage ></WelcomeMessage>}
    {!fetching && postList.map((post)=><Post key={post.id} post={post}/>)}
    </>
}
export default PostList;