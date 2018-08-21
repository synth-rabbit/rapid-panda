/* global location */
const BASE = window.location.hostname === "localhost" ?  '/api/' : 'http://cors.io/?https://pandadragoon.github.io/rapid-panda/api/';

export const ABOUT_URL = `${BASE}abouts.json`;
export const SKILL_URL = `${BASE}skills.json`;
export const WORK_URL = `${BASE}works.json`;
export const TESTIMONIAL_URL = `${BASE}testimonials.json`;
export const CONTACT_URL = `${BASE}contacts.json`;
export const SOCIAL_LINKS_URL = `${BASE}social_links.json`;