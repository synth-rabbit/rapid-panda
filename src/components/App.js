import React from 'react'
import axios from 'axios';

import Navbar from './NavBar';
import Loading from './Loading';

import Landing from '../containers/Landing';
import About from '../containers/About';
import Skills from '../containers/Skills';
import Works from '../containers/Works';
import Testimonials from '../containers/Testimonials';
import Contact from '../containers/Contact';

// import about from '../api/abouts';
// import contact from '../api/contacts';
// import skills from '../api/skills';
// import works from '../api/works';
// import testimonials from '../api/testimonials';

import {
  ABOUT_URL,
  SKILL_URL,
  WORK_URL,
  TESTIMONIAL_URL,
  CONTACT_URL
} from '../config/routes';

require('./application.css');

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: false,
      navType: 'navbar--landing',
      location: 'landing',
      about: {},
      skills: [],
      works: [],
      testimonials: [],
      contact: {}
    }

    this.handleData = this.handleData.bind(this);
    this.handleError = this.handleError.bind(this);
    this.changeNav = this.changeNav.bind(this);
  }

  componentDidMount() {
    // TODO: Create Api
    let {
      getAbout,
      getSkills,
      getWorks,
      getTestimonials,
      getContact
    } = this;

    axios.all([
      getAbout().catch(this.handleError), 
      getSkills().catch(this.handleError), 
      getWorks().catch(this.handleError), 
      getTestimonials().catch(this.handleError), 
      getContact().catch(this.handleError)
    ])
      .then(
        axios.spread((about, skills, works, testimonials, contact) => {
          this.handleData({
            about: about.data,
            skills: skills.data,
            works: works.data,
            testimonials: testimonials.data,
            contact: contact.data
          });
        })
      )
      .catch(this.handleError)

    // this.handleData({
    //   loading: false,
    //   about: about[0],
    //   contact: contact[0],
    //   skills: skills,
    //   works: works,
    //   testimonials: testimonials
    // });
  }

  handleData(data) {
    // TODO: Hook up api
    this.setState({
      loading: false,
      about: data.about[0],
      contact: data.contact[0],
      skills: data.skills,
      works: data.works,
      testimonials: data.testimonials
    });

    // this.setState(data);
  }

  handleError(error) {
    console.error('Error:', error);
    this.setState({
      error: true
    })
  }

  getAbout() {
    return axios.get(ABOUT_URL);
  }

  getSkills() {
    return axios.get(SKILL_URL);
  }

  getWorks() {
    return axios.get(WORK_URL);
  }

  getTestimonials() {
    return axios.get(TESTIMONIAL_URL);
  }

  getContact() {
    return axios.get(CONTACT_URL);
  }

  changeNav(navType, location) {
    this.setState({
      navType,
      location
    });
  }

  render() {
    let { navType, location, about, skills, works, testimonials, contact, loading } = this.state;
 
    return loading ?
        <Loading />
        :
        <main className='app'>
          <Navbar 
            className={navType} 
            location={location}
            social_links={about.social_links} 
          />
          <Landing changeNav={this.changeNav} />
          <About changeNav={this.changeNav} {...about} />
          <Skills changeNav={this.changeNav} skills={skills} />
          <Works changeNav={this.changeNav} works={works} />
          <Testimonials changeNav={this.changeNav} testimonials={testimonials} /> 
          <Contact changeNav={this.changeNav} {...contact} /> 
        </main>
  }
}