import React, {useState, useEffect} from "react";
import {EmptyList} from "../../components/EmptyList/EmptyList";
import {traveList} from "../TravelList";
import {travelBlog} from "../travelBlog/TravelBlog";
import { NavBar} from "../../components/NavBar/NavBar";
import '.styles.css';

const Main =() => { 
    const[travelBlog,settravelBlog] = useState(null);
    const [searchKey, setSearchKey] = useState('');

 const handleNavBar = (e) => { 
    e.preventDefault();
    handleSearchResults();
 };

 const handleSearchResults =() => { 
    const everyBlog = travelList;
    const filteredBlogs = everyBlog.filter((travelBlog) =>  
    travelBlog.catergory.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    settravelBlog(filteredBlogs);

 };

 const handleClearSearch=()=> {
    settravelBlog(travelList);
    setSearchKey( '');
 };


};


export default Main;