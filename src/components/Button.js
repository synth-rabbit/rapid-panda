import React from 'react';

export const Button = ({action, url, icon, text, className}) => {
  return (
    <a 
      className={`button ${className}`} 
      href={ url ? url : ''} 
      onClick={action ? action : null}
      target='_blank'
    >
      <i 
        className={icon ? `fab ${icon === 'fa-file-alt' ? 'far' : ''} ${icon} button__icon` : 'button__icon'} 
        style={{display: icon ? 'initial' : 'none'}}
      >
      </i>
      <span className='button__text'>{text}</span>
    </a>
  );
}

export default Button;