import React, {Component} from 'react';
import Waypoint from 'react-waypoint';
import smoothscroll from 'smoothscroll';

import Button from '../components/Button';

export class Landing extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(link, e){
    e.preventDefault();
    let target = document.querySelector(link);
    smoothscroll(target);
  }

  render(){
    let { changeNav } = this.props;
    var imageUrl = window.location.hostname === "localhost" ? '/images/landing-bg-mobile.jpg' : 'https://pandadragoon.github.io/rapid-panda/images/landing-bg-mobile.jpg';
    return(
      <section className='landing' styl={{backgroundImage: imageUrl}}>
        <Waypoint onEnter={changeNav.bind(null, 'navbar--landing', 'landing')}>
          <aside className='landing__content'>
            <h1 className='landing__title'>Rapid/Panda</h1>
            <h2 className='landing__subtitle'>Portfolio for Josh Edwards</h2>
            <Button 
              className='landing__button' 
              text='Learn More' 
              action={this.handleClick.bind(null, '#about')}
            />
          </aside>
        </Waypoint>
      </section>
    )
  }
}

export default Landing;