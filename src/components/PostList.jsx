import React from 'react';
import PostCard from './PostCard';

const PostList = ({ posts, onLike }) => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onLike={() => onLike(post.id)} // ✅ pass the post ID!
        />
      ))}
    </div>
  );
};

export default PostList;
