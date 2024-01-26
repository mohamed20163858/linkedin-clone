import React from 'react';
import './header.css';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className="header">
        {/* header_left */}
        <div className="header_left">
            <img src="" alt="" />
            <div className="header_search">
                <SearchIcon />
                <input type="text" name="" id="" />
            </div>
        </div>
        
        {/* header_right */}
    </div>
  )
}

export default Header