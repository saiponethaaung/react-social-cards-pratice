import React from 'react';

export default class TwitterShareComment extends React.Component<{ icon: string, hasCount: boolean, count: number, customClass: string }, {}> {
    render(): React.ReactNode {
        return (
            <li className={`share-comment-action ${this.props.customClass}`}>
                < figure className="share-comment-icon" >
                    <img src={this.props.icon} alt="" title="" />
                </figure >
                {(this.props.hasCount) &&
                    <span className="share-comment-count">{this.props.count}</span>
                }
            </li>
        )
    }
}