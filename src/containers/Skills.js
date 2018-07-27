import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

import Button from '../components/Button';
import Section from '../components/Section';
import Skill from '../components/Skill';

export class Skills extends Component {
  render(){
    let { changeNav, skills } = this.props;

    return(
      <Section title='Skills' linkType='top' link='#work' id='skills' fullscreen={true}>
        <Waypoint onEnter={changeNav.bind(null, 'navbar--main', 'skills')}>
          <div>
              <article className='skills'>
              <ul className='skills__list'>
                {
                  skills.map((skill, idx)=> {
                    return <Skill {...skill} key={idx} />
                  })
                }
              </ul>
            </article>
            <Button 
              url='https://docs.google.com/document/d/1TMU9cLgy7Dsh5-pc73uNCH0UfZpu7aX8LAXdLwhvgWk/edit' 
              icon='fa-file-text-o'
              text='Resume'
              className='skills__button'    
            />
          </div>
        </Waypoint>
      </Section>
    )
  }
}

export default Skills;