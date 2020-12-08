import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {

  const [ toggleButton, setToggleButton ] = useState(true);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setToggleButton(!toggleButton)}>
        {toggleButton ? <AiOutlinePlus/> : <AiOutlineMinus/>}
        </button>
      </header>
      {!toggleButton && <p>{info}</p>}
    </article>
  );
};

export default Question;
