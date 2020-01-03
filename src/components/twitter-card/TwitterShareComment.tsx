import React from 'react';

export default class TwitterShareComment extends React.Component<{ icon: string, hasCount: boolean, count: number }, {}> {
    render(): React.ReactNode {
        return (
            <li className="share-comment-action">
                <figure className="share-comment-icon">
                    <img src={this.props.icon} />
                </figure>
                {(this.props.hasCount) &&
                    <span className="share-comment-count">{this.props.count}</span>
                }
            </li>
        )
    }
}