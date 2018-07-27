import React from 'react';

import Button from './Button';
import Card from './Card';


export const Work = ({image_url, title, description, link_title, link_url})=> {
  return (
    <Card className='work__card'>
      <article className='work'>
        <div className='work__img-container'>
          <img 
            className='work__image' 
            src={`images/${image_url}`} 
            alt={`${title} website screenshot`} 
          />
        </div>
        <h3 className='work__title'>{title}</h3>
        <p className='work__description'>{description}</p>
        <Button url={link_url} text={link_title} className='work__button' />
      </article>
    </Card>
  );
}

export default Work;