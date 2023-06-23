import React, {useState, useEffect} from "react";
import {EmptyList} from "../../components/EmptyList/EmptyList";
import {TravelList} from "../TravelList";
import {TravelBlog} from "../TravelBlog/TravelBlog"
import { NavBar} from "../../components/NavBar/NavBar";
import '.styles.css';

const Main =() => { 
    const[TravelBlog,setTravelBlog] = useState(null);
    const [searchKey, setSearchKey] = useState('');

 const handleNavBar = (e) => { 
    e.preventDefault();
    handleSearchResults();
 };

 const handleSearchResults =() => { 
    const everyBlog = TravelList;
    const filteredBlogs = everyBlog.filter((TravelBlog) =>  
    TravelBlog.catergory.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setTravelBlog(filteredBlogs);

 };

 const handleClearSearch=()=> {
    setTravelBlog(TravelList);
    setSearchKey( '');
 };


};


export default Main;