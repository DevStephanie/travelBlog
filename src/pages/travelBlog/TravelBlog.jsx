import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {  locationList} from '../../config/data';
import Roll from './components/Roll';
import './styles.css';
import { Link } from 'react-router-dom';
import EmptyList from '../../components/EmptyList/EmptyList';


const TravelBlog = () => {
  const { id } = useParams();
  const [travelBlog, settravelBlog] = useState(null);

  useEffect(() => {
    let TravelBlog = locationList.find((travelBlog) => travelBlog.id === parseInt(id));
    if (TravelBlog) {
      settravelBlog(TravelBlog);
    }
  }, []);

  return (
    <>
      <Link className='travelBlog-goBack' to='/'>
        <span> &#8592;</span> <span>RETURN...</span>
      </Link>
      {travelBlog ? (
        <div className='travelBlog-wrap'>
          <header>
            <p className='travelBlog-writtenOn'> writtenON{travelBlog.writtenON}</p>
            <h1>{travelBlog.title}</h1>
            <div className='travelBlog-secondCategory'>
              {travelBlog.secondCategory.map((category, i) => (
                <div key={i}>
                  <Roll label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={travelBlog.image} alt='image' />
          <p className='travelBlog'>{travelBlog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default TravelBlog;