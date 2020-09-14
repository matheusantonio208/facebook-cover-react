import React from 'react';

function Post({post}) {
  return(
    <>
      <div class="header-post">
        <img src={post.author.avatar} />
        <span class="name">{post.author.name}</span>
        <p class="date">{post.date}</p>
      </div>

      <clear/>

      <div class="body-post">
        <p>{post.content}</p>
      </div>
    </>
  )
}

export default Post;