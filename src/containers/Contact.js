import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

import Card from '../components/Card';
import Section from '../components/Section';
import Button from '../components/Button';
import ContactInfo from '../components/ContactInfo';

export class Contact extends Component {
  render(){
    let { changeNav, location, email, phone_number, social_links } = this.props;
    return(
      <Section title='Get In Touch' linkType='bottom' link='#about' id='contact' fullscreen={true}>
        <Waypoint onEnter={changeNav.bind(null, 'navbar--main', 'contact')}>
          <div className='contact__waypoint'>
            <Card className='contact__card'>
              <article className='contact'>
                <aside className='contact__col-left'>
                  <img className='contact__logo' src='images/panda.png' alt='Rapid Panda Logo' />
                  {
                    !social_links ?
                    <div />
                    :
                    social_links.map((link, idx)=> {
                      return(
                        <Button 
                          key={idx} 
                          url={link.url} 
                          text={link.name} 
                          icon={link.icon}
                          className='contact__social-link' 
                        />
                      );
                    })
                  }
                </aside>
                <aside className='contact__col-right'>
                  <div className='contact__col-wrapper'>
                  
                    <h3 className='contact__info-title'>Contact Information</h3>
                    <section className='contact__phone-location'>
                      <ContactInfo
                        title='Call:'
                        text={phone_number} 
                        url={`tel:${phone_number}`} 
                      />
                      <ContactInfo
                        title='Location:'
                        text={location} 
                        url='https://www.google.com/maps/place/Lawrence,+KS/@38.9734833,-95.2859463,13z/data=!3m1!4b1!4m5!3m4!1s0x87bf40c7ce479883:0x151713d50478ab2e!8m2!3d38.9716689!4d-95.2352501'
                      />
                    </section>
                    <section className='contact__email'>
                      <ContactInfo
                        title='Email'
                        text={email}
                        url={`mailto:${email}`}
                      />
                    </section>
                  </div>
                </aside>
              </article>
            </Card>
          </div>
        </Waypoint>
      </Section>
    );
  }
}

export default Contact;