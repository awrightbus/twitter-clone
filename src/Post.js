import React from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import PublishIcon from '@material-ui/icons/Publish';

function Post({
    text,
    displayName,
    Verified,
    username,
    image,
    avatar
}) {
    return (
        <div className='post'>
            <div className="post__Avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className='post_headerText'>
                        <h4>
                        {displayName}{' '}
                        <span className='post__headerSpecial'>{Verified &&  <VerifiedUserIcon className='post__verifiedBadge'/>}{username}</span> 
                
                        </h4>
                               
                    </div>
                    <div className='post__headerDescription'>
                        <p>{text}</p>
                    </div>
                    <img src={image}/>
                    <div className='post__footer'>
                        <ChatBubbleOutlineIcon fontSize='small'/>
                        <RepeatIcon fontSize='small'/>
                        <FavoriteBorderIcon  fontSize='small'/>
                        <PublishIcon fontSize='small'/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
