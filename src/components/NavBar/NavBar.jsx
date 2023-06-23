import React from "react";
import './styles.css';

const NavBar = ({ formSubmit, handleSearchKey, clearSearch}) => ( 
    <div className="searchBar-wrap"> 
    <form onSubmit={formSubmit}> 
        <input 
            type ='text'
            placeholder="Search by Category"
            onChange={handleSearchKey}/>
    
    {value && <span onClick={clearSearch}>X</span>}
    <button> GO</button>
    </form>
    
    </div>
);

export default NavBar;