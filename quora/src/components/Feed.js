// src/components/Feed.js
import React from 'react';
import Post from './Post';
import './Feed.css';

function Feed() {
  return (
    <div className="feed">
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
