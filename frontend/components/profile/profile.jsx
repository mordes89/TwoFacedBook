import React from 'react';
import { Link } from 'react-router-dom';
// import Modal from './modal/modal';
// import MenuDropdown from './menu_dropdown_container';
// import PostMenuDropdown from './post_menu_dropdown_container';
import {useParams} from "react-router-dom";

const Profile = (props) => {
  const {id} = useParams();
  
  return (
    <div>
        profile
    </div>
  )  
};

export default Profile;