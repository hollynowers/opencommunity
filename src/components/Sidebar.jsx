import React, { useState } from 'react';
import "./Sidebar.css"; 
import teamsLogo from "./teams-icon.jpg"; // Import Microsoft Teams logo
import outlookLogo from "./outlook-logo.png"; // Import Outlook logo

const openTeamsApp = () => {
    window.location.href = "msteams://";
};

const openOutlookApp = () => {
    window.location.href = "mailto:";
};

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? '<' : '>'}
        </button>
        <div className={`sidebar ${isOpen ? '' : 'collapsed'}`}>
          <ul>
            <li>
              <button onClick={openTeamsApp}>
                <img src={teamsLogo} alt="Microsoft Teams" style={{ width: '90px', marginTop: '370px' }} />
              </button>
            </li>
            <li>
              <button onClick={openOutlookApp}>
                <img src={outlookLogo} alt="Outlook" style={{ width: '100px', marginTop: '20px' }} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Sidebar;
