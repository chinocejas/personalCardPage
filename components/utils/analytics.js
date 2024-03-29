import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize(process.env.GA_TRACKING_KEY);
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = ({ category = '', action = '', label = '' }) => {
  if (category && action) {
    ReactGA.event({ category, action, label });
  }
};