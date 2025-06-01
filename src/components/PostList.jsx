import React from 'react';
import PostCard from './PostCard'; // ✅ Import PostCard component

function PostList({ posts, onLike, onAddComment }) {
  return (
    <div>
      {posts.map(post => (
        <PostCard
          key={post.id}
          username={post.username}
          imageUrl={post.imageUrl}
          caption={post.caption}
          likes={post.likes}
          comments={post.comments} // ✅ Pass comments array
          onLike={() => onLike(post.id)} // ✅ Like handler
          onAddComment={(comment) => onAddComment(post.id, comment)} // ✅ Comment handler
        />
      ))}
    </div>
  );
}

export default PostList;
