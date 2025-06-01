import React from 'react';
import { Heart } from 'lucide-react';

function PostCard({ post, onLike }) {
  const { username, imageUrl, caption, likes } = post;

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
      </div>
    </div>
  );
}

export default PostCard;
