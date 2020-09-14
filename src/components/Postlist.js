import React, { Component } from 'react';

import Post from './Post';
import Comment from './Comment';

class Postlist extends Component{
  state = {
    posts: [
      {
        id: 1,
        date: '04 Jun 2020',
        content: 'Pessoal, alguém sabe que o sabiá sabia soviá?',
        author: {
          name: 'Luiz',
          avatar: 'https://source.unsplash.com/collection/9405733'
        },
        comments: [
          {
            id: 1,
            content: 'Mas é claro :)!',
            author: {
              name: 'Rosevan',
              avatar: 'https://source.unsplash.com/collection/9405733'
            }
          },
          {
            id: 2,
            content: 'Vou pensar :)!',
            author: {
              name: 'Jureci',
              avatar: 'https://source.unsplash.com/collection/9405733'
            }
          }
        ]
      },
    ]
  };

  render(){
    return (
      <div class="post-list-grid">
        {this.state.posts.map((post) => 
          <div class="post" key={post.id}>
            <Post post={post}/>
            <div class="comments">
              {post.comments.map((comment) => 
                <Comment comment={comment} />
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Postlist;