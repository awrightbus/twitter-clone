import React from 'react'
import './Widget.css'
import { TwitterTimelineEmbed, 
TwitterShareButton, 
TwitterTweetEmbed} from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';

function Widget() {
    return (
        <div className ='widget'>
            <div className="widget__input">
                <SearchIcon className='widget__searchIcon'/>
                <input placeholder="Search Twitter" type='text'/>
            </div>
            <div className='widget__widgetContainer'>
                <h2>Whats Happening?</h2>
                <TwitterTweetEmbed tweetId={'1305962859768184838'}/>
                <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="odinoftheeast"
                    options={{height: 400}} 
                />
            </div>
        </div>
    )
}

export default Widget
