import React, {Component} from 'react';
import Waypoint from 'react-waypoint';
import smoothscroll from 'smoothscroll';

import Button from '../components/Button';

export class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {
      isMobile: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleMediaQuery = this.handleMediaQuery.bind(this);
  }

  componentDidMount(){
    var x = window.matchMedia("(max-width: 768px)");
    x.addListener(this.handleMediaQuery);
  }

  handleMediaQuery(e){
    if(e.matches){
      this.setState({isMobile: true});
    } else {
      this.setState({isMobile: false});
    }
  }

  handleClick(link, e){
    e.preventDefault();
    let target = document.querySelector(link);
    smoothscroll(target);
  }

  render(){
    let { changeNav } = this.props;
    let imagePath = this.state.isMobile ? 'landing-bg-mobile' : 'landing-bg';
    var imageUrl = window.location.hostname === "localhost" ? `/images/${imagePath}.jpg` : `https://pandadragoon.github.io/rapid-panda/images/${imagePath}.jpg`;
    return(
      <section className='landing' style={{backgroundImage: `url(${imageUrl})`}}>
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