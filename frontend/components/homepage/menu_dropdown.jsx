import React from 'react';

class MenuDropdown extends React.Component {
   constructor(props) {
    super(props);
    this.state = { show: true };
   }
   render() {
      return (
         <ul 
            onClick={e => e.stopPropagation()} 
            className="show-menu-dropdown">
            <li>1</li>
            <li>2</li>
            <button onClick={this.props.logout}>Log Out</button>
         </ul>
      )
   }
}

export default MenuDropdown;