
import React from 'react'
import "./Feed.css";
import Storyreel from "./Storyreel";

import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <Storyreel />
            {/*storyreel*/}
             {/*messaage sender*/}
             <MessageSender />
             
             <Post
              
              Profilepic ='.images/image1.png'
              message="wow"
              timestamp="this is the timestamp"
              username="poori"
              image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.newmynamepix.com%2Fgirls%2F1555&psig=AOvVaw33rl3IuQ9-RNyTOR6tcT3S&ust=1642067304117000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjO4qf4q_UCFQAAAAAdAAAAABAJ"
              />
             </div>
        
    )
}

export default Feed;
