import { PostCard } from "../PostCard";

export const Post = ({ posts }) => (
    <div className="post_grid">
        {posts.map(post => (
            <PostCard 
                key={post.id}
                title={post.title}
                body={post.body}
                id={post.id}
                cover={post.cover}
            />                                  
            ))}
    </div>
);