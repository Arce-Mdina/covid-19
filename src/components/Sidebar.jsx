import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {

    const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  const handleClick = (path) => {
    setActivePath(path);
  };

  return (
    <div className="sidebar">
        <Link 
            to="/science-behind-covid"
            onClick={() => handleClick('/science-behind-covid')}
            className={activePath === '/science-behind-covid' ? 'active' : ''}
        >Science</Link>
        
        <Link 
            to="/symptoms"
            onClick={() => handleClick('/symptoms')}
            className={activePath === '/symptoms' ? 'active' : ''}
        >Symptoms</Link>
        
        <Link 
            to="/treatments" 
            onClick={() => handleClick('/treatments')}
            className={activePath === '/treatments' ? 'active' : ''}
        >Treatments</Link>
        
        <Link 
            to="/preventions"
            onClick={() => handleClick('/preventions')}
            className={activePath === '/preventions' ? 'active' : ''}
        >Preventions</Link>
        
        <Link 
            to="/pandemic"
            onClick={() => handleClick('/pandemic')}
            className={activePath === '/pandemic' ? 'active' : ''}
        >Pandemic</Link>
        
        <Link 
            to="/quarantine"
            onClick={() => handleClick('/quarantine')}
            className={activePath === '/quarantine' ? 'active' : ''}
        >Quarantine</Link>
        
        <Link 
            to="/lockdown"
            onClick={() => handleClick('/lockdown')}
            className={activePath === '/lockdown' ? 'active' : ''}
        >The Lockdown</Link>
        
        <Link 
            to="/impacts"
            onClick={() => handleClick('/impacts')}
            className={activePath === '/impacts' ? 'active' : ''}
        >Impacts</Link>
        
        <Link 
            to="/stats"
            onClick={() => handleClick('/stats')}
            className={activePath === '/stats' ? 'active' : ''}
        >Data & Stats</Link>
    </div>
  );
};

export default Sidebar;