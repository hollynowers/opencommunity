import React, { useState } from 'react';
import "./Sidebar.css"; 


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={`sidebar ${isOpen ? '' : 'collapsed'}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? '<' : '>'}
        </button>
        <ul>
          <li><a href="msteams://">Microsoft Teams</a></li>
          <li><a href="mailto:">Outlook</a></li>
        </ul>
      </div>
    );
};

export default Sidebar;
