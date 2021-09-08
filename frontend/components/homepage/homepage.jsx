import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from'../../../app/assets/images/facebookround.png';
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
          <img src={logoImage} className="logo"/>
          <img src="<%= image_url('facebookround.png') %>" />
          <img src={search} className="logo"/>
        </div>
        <div className="header2">
          <img src={home} className="logo"/>
          <img src={video} className="logo"/>
          <img src={market} className="logo"/>
          <img src={friends} className="logo"/>
          <img src={news} className="logo"/>
        </div>
        <div className="header3">
          <img src={apps} className="logo"/>
          <img src={messages} className="logo"/>
          <img src={bell} className="logo"/>
          <img src={arrowIcon} className="logo"/> 
        </div>       
      </header>
        <button onClick={logout}>Log Out</button>
        <h2 className="header-name">(profile pic) {currentUser.username}</h2>
    </div>
  );

  return currentUser ? loggedIn() : null;
};


export default Homepage;