import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [ item, setItem ] = useState(0);
  const { name, job, image, text } = people[item];

  const validate = (number) => {

    // number more great length array --> return the first item
    if(number > people.length - 1) {
      return 0
    }
    // number is negative --> return the last item
    if(number < 0) {
      return people.length - 1
    }
    return number
  };

  const handleNextPerson = () => {

    setItem((item) => {
      let newPerson = item + 1
      return validate(newPerson)
    })
  };

  const handlePrevPerson = () => {

    setItem((item) => {
      let newPerson = item - 1
      return validate(newPerson)
    });
  };

  const random = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if(randomNumber === item) {
      randomNumber = item + 1
    }
    setItem(validate(randomNumber))
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img"/>
        <span className="quote-icon">
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={handlePrevPerson}>
          <FaChevronLeft/>
        </button>
        <button className="next-btn" onClick={handleNextPerson}>
          <FaChevronRight/>
        </button>
      </div>
      <button className="random-btn" onClick={random}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
