import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
const App = () => {
  return ( <
    div className = "ui container comments" >
    <
    ApprovalCard > < CommentDetail author = "Sam"
    TimeAgo = "Today at 4:45 PM"
    content = "Nice blog Post!"
    avatar = {
      Faker.image.avatar()
    }
    /></ApprovalCard >

    <
    ApprovalCard >
    <
    CommentDetail author = 'Alex'
    TimeAgo = "Today at 2:00AM PM"
    content = "I like this Sub!"
    avatar = {
      Faker.image.avatar()
    }
    />    < /
    ApprovalCard >
    <
    ApprovalCard >
    <
    CommentDetail author = 'Jane'
    TimeAgo = "Yesterday at 6:00 PM"
    content = "I hate this person"
    avatar = {
      Faker.image.avatar()
    }
    />     < /
    ApprovalCard > < /
    div >
  );
};

ReactDOM.render( < App / > , document.querySelector('#root'));
