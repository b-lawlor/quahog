import { ContentData } from 'vitepress';

export default function getRandom( posts: ContentData[] ) : any {
    return [ ...posts ][Math.floor(Math.random() * posts.length )]
}