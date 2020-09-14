import React from 'react';

function comment({comment}){
  return(
    <>
      <div class="comment" key={comment.id}>
        <img src={comment.author.avatar} />
        <span class="name">{comment.author.name}</span>
        <p class="body-comment">
          {comment.content}
        </p>
      </div>
    </>
  )
}

export default comment;