import React,{useState} from 'react';
import './TweetBox.css';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import db from './firebase';

function TweetBox() {
    
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const submitTweet = (e) => {
        e.preventDefault();
        db.collection('post').add({
            displayName:'John Cena',
            username:'@theRealCena',
            Verified: true,
            text: tweetMessage,
            image:tweetImage,
            avatar:'https://robohash.org/sde',

    });
        setTweetMessage("");
        setTweetImage("");
    };
    
    return (
        <div className='tweetBox'>
            <form>
                <div  className='tweetBox__input'>
                <Avatar />
                <input onChange={e => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" type='text'/>
                </div>
                <input onChange={e => setTweetImage(e.target.value)} value={tweetImage} placeholder="Enter image url here" type='text' className='tweetBox__inputImage'/>
                <Button onClick={submitTweet} className='tweetBox__Button'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
