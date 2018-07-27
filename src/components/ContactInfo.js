import React from 'react';

export const ContactInfo = ({ title, text, url }) => {
  return (
    <section className='contact-info'>
      <h4 className='contact-info__title'>{title}</h4>
      <p className='contact-info__text'>
        <a className='contact-info__link' href={url}>{text}</a>
      </p>
    </section>
  )
    
}

export default ContactInfo;