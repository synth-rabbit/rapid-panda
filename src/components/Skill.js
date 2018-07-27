import React from 'react';


export const Skill = ({image_url, name}) => {
  return (
    <li className='skill'>
      <img className='skill__image' src={`images/${image_url}`} alt={`${name} Logo`} />
      <p className='skill__name'>{name}</p>
    </li>
  )
}

export default Skill;