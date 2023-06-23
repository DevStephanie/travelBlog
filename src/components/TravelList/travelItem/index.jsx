import React from "react";
import {Link} from 'react-router-dom';
import Roll from ;
import './styles.css';

const travelItem = ({ 
    blog:{
    id,
    title,
    category,
    secondcategory,
    description,
    writerName,
    writerPic,
    writtenOn,
    image,
    },

}) => { 
    return( 
        <div className='travelItem-wrap'> 

        <img className="travelItem-image" src={image} alt ='image'/>
        <Roll label={category}/>
        <h3> {title}</h3>

        <p className="travelItem-description"> {description} </p>
        <footer> 

            <div className="travelItem-writerName">
                <img src={writerPic} alt='writer picture'/>

                <div> 
                    <h5> 
                        {writerName}
                    </h5>
                    <p> 
                        {writtenOn}
                    </p>
                </div>
            </div>
            <Link className="travelItem-Link" to={'/travelBlog/$id'}></Link>
        </footer>
        </div> 
    );
};

export default travelItem;