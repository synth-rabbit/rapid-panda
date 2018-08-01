import React, { Component } from 'react';
import smoothscroll from 'smoothscroll';

export class NavBar extends Component {

  constructor(props){
    super(props);

    this.state = {
      isOpen: false
    }

    this.toggleMobileNav = this.toggleMobileNav.bind(this);
  }
  
  handleClick(link, e){
    e.preventDefault();
    let element = document.querySelector(link);
    smoothscroll(element);
  }

  toggleMobileNav(){
    let newOpen = !this.state.isOpen;
    this.setState({
      isOpen: newOpen
    });
  }

  render(){
    const links = [
      {
        name: 'About',
        url: '#about'
      },
      {
        name: 'Skills',
        url: '#skills'
      },
      {
        name: 'Work',
        url: '#work'
      },
      {
        name: 'Testimonials',
        url: '#testimonials'
      },
      {
        name: 'Contact',
        url: '#contact'
      }
    ];

    let { className, location, social_links } = this.props;
    let { isOpen } = this.state;

    if(!social_links){
      social_links = [];
    }
    
    return(
      <nav className={`navbar ${className}`}>
        <a onClick={this.toggleMobileNav} 
          className={`navbar__button${ isOpen ? '--hide' : ''}`}
        >
          <i className='fa fa-plus' />
        </a>
        <section className={`navbar__links navbar__links${ isOpen ? '' : '--hide'}`}>
          <img
            src='images/panda.png'
            alt='Rapid Panda logo'
            className='navbar__logo'
            style={{
              display: location === 'landing' ? 'none' : 'block'
            }}
          />
          <a onClick={this.toggleMobileNav}
            className='navbar__link navbar__close'
          >
            <i className='fa fa-close' />
          </a>
          {
            links.map((link, idx)=> {
              return (
                <a 
                  key={idx}
                  onClick={this.handleClick.bind(null, link.url)}
                  href={link.url} 
                  className={`navbar__link ${ link.name.toLowerCase() === location ? 'navbar__link--active' : '' }`}
                >
                  {link.name}
                </a>
              )
            })
          }
          <div className='navbar__social'>
            {
              social_links.map((link, idx)=> {
                return(
                  <a 
                    key={idx}
                    href={link.url}
                    className='navbar__social-link'
                    target='_blank'
                  >
                    <i className={`fa ${link.icon}`} />
                  </a>
                );
              })
            }
          </div>
        </section>
       
      </nav>
    );
  }
} 


export default NavBar;