import React from 'react';
import TwitterCard from './twitter-card/TwitterCard';
import { TwitterTweet } from '../interfaces';

export default class TwitterList extends React.Component {
    render(): React.ReactNode {
        let sampleTweet: TwitterTweet[] = [
            {
                image: "/images/profile-image.jpg",
                comment: 2,
                date: "Sep 2",
                fullName: "The Practical Dev",
                link: {
                    title: "Learning React? Start small",
                    desc: "Can't pry yourself away from tutorial? The cure is to make tiny little experiment apps.",
                    image: "/images/learn-react.png",
                    link: "https://daveceddia.com/react-practice-projects/",
                    website: "dev.to",
                },
                profileLink: "#",
                msg: "Learning React? Start small.",
                react: 190,
                retweet: 47,
                username: "@ThePracticalDev"
            },
            {
                image: "/images/profile-image.jpg",
                comment: 2,
                date: "Sep 2",
                fullName: "The Practical Dev",
                link: null,
                profileLink: "#",
                msg: "Learning React? Start small.",
                react: 190,
                retweet: 47,
                username: "@ThePracticalDev"
            },
            {
                image: "/images/profile-image.jpg",
                comment: 2,
                date: "Sep 2",
                fullName: "The Practical Dev",
                link: {
                    title: "Learning React? Start small",
                    desc: "Can't pry yourself away from tutorial? The cure is to make tiny little experiment apps.",
                    image: "/images/learn-react.png",
                    link: "https://daveceddia.com/react-practice-projects/",
                    website: "dev.to",
                },
                profileLink: "#",
                msg: "Learning React? Start small.",
                react: 190,
                retweet: 47,
                username: "@ThePracticalDev"
            },
            {
                image: "/images/profile-image.jpg",
                comment: 2,
                date: "Sep 2",
                fullName: "The Practical Dev",
                link: {
                    title: "Learning React? Start small",
                    desc: "Can't pry yourself away from tutorial? The cure is to make tiny little experiment apps.",
                    image: "/images/learn-react.png",
                    link: "https://daveceddia.com/react-practice-projects/",
                    website: "dev.to",
                },
                profileLink: "#",
                msg: "Learning React? Start small.",
                react: 190,
                retweet: 47,
                username: "@ThePracticalDev"
            },
        ]

        return (
            <div>
                {sampleTweet.map((tweet) => {
                    return <TwitterCard tweet={tweet} />
                })}
            </div>
        )
    }
}