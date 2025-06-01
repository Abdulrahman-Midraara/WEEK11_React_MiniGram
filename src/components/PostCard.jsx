import React, { useState } from 'react';
import { Heart } from 'lucide-react';

function PostCard({ username, imageUrl, caption, likes, comments, onLike, onAddComment }) {
  const [newComment, setNewComment] = useState('');

  // ✅ Handle submitting a comment
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      onAddComment(newComment);
      setNewComment('');
    }
  };

  return (
    <div className="post">
      <img src={imageUrl} alt="Post" className="post-image" />
      <div className="post-info">
        <h3>@{username}</h3>
        <p>{caption}</p>
        <div className="like-section">
          <button className="like-button" onClick={onLike}>
            <Heart size={20} />
          </button>
          <span>{likes} likes</span>
        </div>

        {/* ✅ Comment Form */}
        <form onSubmit={handleSubmit} style={{ marginTop: '10px' }}>
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            style={{ padding: '6px', width: '80%' }}
          />
          <button type="submit" style={{ padding: '6px 10px', marginLeft: '5px' }}>Post</button>
        </form>

        {/* ✅ Display Comments */}
        <div className="comments" style={{ marginTop: '10px', textAlign: 'left' }}>
          {comments.map((comment, index) => (
            <p key={index} style={{ margin: '4px 0', color: '#444' }}>💬 {comment}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostCard;
