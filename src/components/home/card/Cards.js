import React from 'react';
import './Cards.css';
import CardList from './CardList';
import { image6 } from '../../../assets';

function Cards() {
  return (
    <div className='cards'>
      <h1 style={{textAlign: "Center", marginBottom: "50px", fontSize: "45px"}}>Main Course</h1>
      <div>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <CardList
            path="/about"
            img={image6}
            alt="alternative desc"
            name="About Us"
          />
          <CardList
            path="/gallery"
            img={image6}
            alt="alternative desc"
            name="Our Gallery"
          />
          <CardList
            path="/whistleblowing"
            img={image6}
            alt="alternative desc"
            name="Whistle Blowing System"
          />
        </ul>
      </div>
    </div>
  );
}

export default Cards;
