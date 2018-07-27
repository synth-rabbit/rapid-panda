import React from 'react';

import Card from './Card';

export const Testimonial = ({name, title, company, description})=> {
  return (
    <Card className='testimonial__card'>
      <article className='testimonial'>
        <h3 className='testimonial__name'>{name}</h3>
        <p className='testimonial__title'>{`${title}, ${company}`}</p>
        <p className='testimonial__description'>
          { description }
        </p>
      </article>
    </Card>
  );
}

export default Testimonial;