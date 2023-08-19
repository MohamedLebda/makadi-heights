import React, { useState } from 'react';
import Card from '../../components/Card';
import data from './data';
import './about.css';

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCircleClick = (index) => {
    setCurrentIndex(index === currentIndex ? 0 : index); 
  };

  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__header">
          <h3>Discover Lifestyle</h3>
          <h1>Amentities</h1>
          <p>Occupying a land area of 33,000 square meters, Makadi Heights’ stunning clubhouse</p>
          </div>
          <div className="about__cards">
            {data.map((item, index) => (
              <Card key={item.id} className={`about__card ${currentIndex === index ? 'card__active' : ''} about__card${index}`} onClick={() => handleCircleClick(index)}>
                <span className="about__card-icon">
                  {item.icon}
                </span>
                <div className="card__info">
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </div>
              </Card>       
            ))}
          </div>
        </div>
        <div className="about__right">
          <div className="slider">
            <img src={data[currentIndex].image} alt={data[currentIndex].title} />
          </div>
          <div className="slider__circles">
            {data && data.map((item, index) => (
              <div
                key={item.id}
                className={`slider__circle ${currentIndex === index ? 'active' : ''}`}
                onClick={() => handleCircleClick(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
