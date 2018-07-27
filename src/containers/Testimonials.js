import React, {Component} from 'react';
import Waypoint from 'react-waypoint';

import Section from '../components/Section';
import Testimonial from '../components/Testimonial';

export class Testimonials extends Component {
  render(){
    let { changeNav, testimonials } = this.props;
    return(
      <Section title='Testimonials' linkType='top' link='#contact' id='testimonials' fullscreen={true}>
        <Waypoint onEnter={changeNav.bind(null, 'navbar--main', 'testimonials')}>
          <section className='testimonials'>
            {
              testimonials.map((testimonial, idx)=> {
                return <Testimonial {...testimonial} key={idx} />
              })
            }
          </section>
        </Waypoint>
      </Section>
 
    );
  }
}

export default Testimonials;