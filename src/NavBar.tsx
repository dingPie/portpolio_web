import React from "react";

interface NavProps {
  page: string;
  setPage: (value: string) => void;
}

const NavBar = ({ page, setPage }:NavProps ) => {

  return (
    <>
      <div className="nav-box">
        <div className='set-profile-btn' onClick= {() => setPage('profile')}> Profile </div>
        <div className='set-skill-btn' onClick= {() => setPage('skill')}> Skill </div>
        <div className='set-inventory-btn' onClick= {() => setPage('inventory')}> Inventory </div>
        <div className='set-title-btn' onClick= {() => setPage('title')}> Title </div>
      </div>
    </>
  )
}
export default NavBar