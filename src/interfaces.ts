export interface TwitterTweet {
    image: string;
    fullName: string;
    username: string;
    date: string;
    msg: string;
    profileLink: string;
    comment: number;
    retweet: number;
    react: number;
    link: ShareLink | null;
}

export interface ShareLink {
    image: string;
    title: string;
    desc: string;
    website: string;
    link: string;
}