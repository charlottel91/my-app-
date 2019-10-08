import React from 'react';


const QuoteCard = () => {
    return (
      <figure className="QuoteCard">
        <img {props.image} alt = {props.character}/>
        <figcaption>
        <blockquote>
        {props.quote}
        </blockquote>
        <cite>{props.character}</cite>
      </figcaption>
    </figure>
  )
  }

  export default QuoteCard;