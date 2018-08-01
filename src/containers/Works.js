import React, {Component} from 'react';
import Waypoint from 'react-waypoint';

import Section from '../components/Section';
import Work from '../components/Work';

export class Works extends Component {
  render(){
    let { changeNav } = this.props;

    return(
      <Section title='My Work' linkType='top' link='#testimonials' id='work' fullscreen={false}>
        <Waypoint onEnter={changeNav.bind(null, 'navbar--main', 'work')} fireOnRapidScroll={false}>
          <a>''</a>
        </Waypoint>
        <section className='works'>
          {
            this.props.works.map((work, idx)=> {
              return <Work key={idx} {...work} />
            })
          }
        </section>
        
      </Section>
    );
  }
}

export default Works;