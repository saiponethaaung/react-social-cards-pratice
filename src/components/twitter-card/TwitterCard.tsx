import React from 'react';
import './TwitterCard.scss';
import { TwitterTweet } from '../../interfaces';
import TwitterShareLink from './TwitterShareLink';
import TwitterShareComment from './TwitterShareComment';

export default class TwitterCard extends React.Component<{ tweet: TwitterTweet }, {}> {
    render(): React.ReactNode {
        let tweet = this.props.tweet;

        return (
            <div className="twitter-card">
                <figure className="profile-image">
                    <img src={tweet.image} alt="profile" title="profile" />
                </figure>
                <div className="body-content">
                    <div className="content">
                        <div className="info">
                            <div className="info-title">
                                <div className="info-name">{tweet.fullName}</div>
                                <a href={tweet.profileLink} className="info-username">{tweet.username}</a>
                                <span className="middot">&middot;</span>
                                <div className="info-date">{tweet.date}</div>
                            </div>
                            <p className="info-content">{tweet.msg}</p>
                        </div>
                        {(tweet.link) &&
                            <TwitterShareLink shareLink={tweet.link} />
                        }
                    </div>
                    <div className="footer">
                        <ul className="share-comment-actions">
                            <TwitterShareComment icon="/icons/twitter/comment.png" hasCount={true} count={tweet.comment} />
                            <TwitterShareComment icon="/icons/twitter/tweet.png" hasCount={true} count={tweet.retweet} />
                            <TwitterShareComment icon="/icons/twitter/react.png" hasCount={true} count={tweet.react} />
                            <TwitterShareComment icon="/icons/twitter/share.png" hasCount={false} count={0} />
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}