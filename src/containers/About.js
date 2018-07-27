import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

export class About extends Component {
  render(){
    let { changeNav, content, title, social_links } = this.props;
    
    if(!social_links){
      return <div />
    }

    return(
      <Section title='About Me' linkType='top' link='#skills' id='about' fullscreen={true}>
        <Waypoint onEnter={changeNav.bind(null, 'navbar--main', 'about')}>
          <article className='about'>
            <aside className='about__social-links'>
              {
                social_links.map((link, idx)=> {
                  return(
                    <Button 
                      key={idx} 
                      url={link.url} 
                      text={link.name} 
                      icon={link.icon}
                      className='about__social-link' 
                    />
                  );
                })
              }
            </aside>
            <aside className='about__text'>
            <Card>
              <article className='about__article'>
                <header>
                  <h2 className='about__title'>{title}</h2>
                </header>
                <section>
                  <p className='about__content'>{content}</p>
                </section>
              </article>
            </Card>
            </aside>
          </article>
        </Waypoint>
      </Section>
    );
  }
}

export default About;
