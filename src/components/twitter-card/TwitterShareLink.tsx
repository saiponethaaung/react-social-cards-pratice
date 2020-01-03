import React from 'react';
import { ShareLink } from '../../interfaces';

export default class TwitterShareLink extends React.Component<{ shareLink: ShareLink }, {}> {
    render(): React.ReactNode {
        let link: ShareLink = this.props.shareLink;

        return (
            <a href={link.link} target="_blank" rel="noopener noreferrer" className="share-link">
                <figure className="body-image">
                    <img src={link.image} alt={link.title} title={link.title} />
                </figure>
                <div className="body-info">
                    <h4 className="share-title">{link.title}</h4>
                    <p className="share-desc">{link.desc}</p>
                    <span className="share-website">{link.website}</span>
                </div>
            </a>
        )
    }
}