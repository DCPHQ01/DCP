// src/gtag.js
import ReactGA from 'react-gtag';

const GA_MEASUREMENT_ID = 'G-NJSMZWGK1J'; 

export const initGA = () => {
  ReactGA.config({ id: GA_MEASUREMENT_ID });
};

export const pageview = (url) => {
  ReactGA.event('page_view', {
    page_path: url,
  });
};
