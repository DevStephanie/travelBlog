import { useState } from "react";
import { locationList } from "./config/data";


export default function Gallery(){ 
  const [index, setIndex] = useState(0);
  const[showMore, setshowMore] = useState(false);
  const hasNext = index < locationList.length-1;

  function handleNextClick(){ 
    if(hasNext){ 
      setIndex(index + 1);
    } else 
    { 
      setIndex(0);
    }
  }

  function handleMoreClick(){ 
    setshowMore(!showMore);
  }

  let location = locationList[index];
  return( 
    <>
    <button onClick={handleNextClick}> 
    Next 
    </button>
    <h2> 
      <i> {location.title} </i>
      by {location.writerName}
    </h2>

    <h3> 
      ({index + 1} of {locationList.length})
      </h3>
      <button onClick ={ handleMoreClick}> 
      {showMore ? 'Hide' : 'Show'} details </button>
      {showMore && <p> {location.description}</p>}
      < img src={location.image}
      alt ={location.alt}/> 
      </>
  )
}

// import React from 'react';
// import { BrowserRouter as Router, Route,  Routes} from "react-router-dom";
// import './App.css';
// import travelBlog from "./pages/TravelBlog/TravelBlog";
// import Main from "./pages/Main/Main";

{/* const App =() => {
  return (
    <div className='container'>
    <Router> 
    <Routes>
      <Route path="/" exact Component={Main}/>
      <Route path="/travelBlog/: id" Component={travelBlog}/>
      </Routes>
      </Router>
    </div>
  );
} */}

