import React from 'react';
import { Link } from 'react-router-dom';
import search from'../../../app/assets/images/search.png';
import home from'../../../app/assets/images/home.png';
import video from'../../../app/assets/images/video.png';
import market from'../../../app/assets/images/market.png';
import friends from'../../../app/assets/images/friends.png';
import news from'../../../app/assets/images/news.png';
import apps from'../../../app/assets/images/apps.png';
import messages from'../../../app/assets/images/messages.png';
import bell from'../../../app/assets/images/bell.png';
import arrowIcon from'../../../app/assets/images/down-arrow.png';

// import Modal from './modal/modal';


const Homepage = ({ currentUser, logout}) => {
  const loggedIn = () => (
    <div>
      <header className="header">
        <div className="header1">
          <img src={window.facebookroundURL} className="logo"/>
          <img src={window.searchURL} className="logo"/>
        </div>
        <div className="header2">
          <img src={window.homeURL} className="logo"/>
          <img src={window.videoURL} className="logo"/>
          <img src={window.marketURL} className="logo"/>
          <img src={window.friendsURL} className="logo"/>
          <img src={window.newsURL} className="logo"/>
        </div>
        <div className="header3">
          <img src={window.appsURL} className="logo"/>
          <img src={window.messagesURL} className="logo"/>
          <img src={window.bellURL} className="logo"/>
          <img src={window.downarrowURL} className="logo"/>
        </div>       
      </header>
        <button onClick={logout}>Log Out</button>
        <h2 className="header-name">(profile pic) {currentUser.username}</h2>
    </div>
  );

  return currentUser ? loggedIn() : null;
};


export default Homepage;