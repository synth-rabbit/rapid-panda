import React, {Component} from 'react';

import smoothscroll from 'smoothscroll';

export class Section extends Component {
  
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
    let {title, link, linkType, id, fullscreen } = this.props;

    return(
      <section className={`section ${ !fullscreen ? 'section--expand' : '' }`}>
        <div className='section__wrapper'>
          <a className='section__anchor' id={id} />
          <header>
            <h1 className='section__title'>{title}</h1>
            { 
              linkType === 'top' ?
              <a className='section__top' href={link} onClick={this.handleClick.bind(null, link)}>
                <i className='fa fa-angle-double-down'></i>
              </a>
              :
              <div></div>
            }
          </header>
          <section>
            { this.props.children }
          </section>
        
          <footer>
            { 
              linkType === 'bottom' ?
              <a className='section__bottom' href={link} onClick={this.handleClick.bind(null, link)}>
                <i className='fa fa-angle-double-up'></i>
              </a>
              :
              <div></div>
            }
          </footer>
        </div>
      </section>
    );
  }
}

export default Section;