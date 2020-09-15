import React,{useState, useEffect} from 'react'
import './Feed.css'
import Post from './Post.js'
import TweetBox from './TweetBox.js'
import db from './firebase.js'

function Feed(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        db.collection('post').onSnapshot((snapshot) => (
            setPosts(snapshot.docs.map((doc) => doc.data()))
        ))
    }, [])
    return (
        <div className='feed'>
            
            {/* Header */}
            <div className='feed__header'>
                <h3>Home</h3>
            </div>
            
            {/* Tweet Box */}
            <TweetBox />

            {/* Post */}
        {posts.map(post => (
            <Post 
                text={post.text}
                displayName={post.displayName}
                username ={post.username}
                Verified={post.Verified}
                image={post.image}
                avatar={post.avatar}
                />
        ))}
            
            
        </div>
    )
}

export default Feed
