import React, { useState } from 'react';
import { Home, PlusSquare, Heart, User } from 'lucide-react';
import PostList from './components/PostList'; // ✅ Import PostList component

// ✅ Initial posts array with image, caption, and likes
const initialPosts = [
  {
    id: 1,
    username: 'photography_lover',
    imageUrl: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=600&q=80',
    caption: '🌅 Chasing sunsets and making memories!',
    likes: 0,
  },
  {
    id: 2,
    username: 'travel_enthusiast',
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80',
    caption: '✈️ Another day, another adventure! #wanderlust',
    likes: 0,
  },
  {
    id: 3,
    username: 'foodie_adventures',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    caption: '🍜 Found this amazing local spot! The flavors are incredible!',
    likes: 0,
  },
];

function App() {
  // ✅ State: Add comment array to each post
  const [posts, setPosts] = useState(
    initialPosts.map(post => ({ ...post, comments: [] }))
  );

  // ✅ Function: Increase like count for a post
  const handleLike = (postId) => {
    const updatedPosts = posts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  // ✅ Function: Add a new comment to a post
  const handleAddComment = (postId, newComment) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      )
    );
  };

  return (
    <div className="app">
      {/* ✅ App Header with icons */}
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">MiniGram</h1>
          <nav className="nav-icons">
            <button className="nav-button"><Home /></button>
            <button className="nav-button"><PlusSquare /></button>
            <button className="nav-button"><Heart /></button>
            <button className="nav-button"><User /></button>
          </nav>
        </div>
      </header>

      {/* ✅ Render posts via PostList, with all props */}
      <PostList posts={posts} onLike={handleLike} onAddComment={handleAddComment} />
    </div>
  );
}

export default App;
