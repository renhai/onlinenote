/**
 * React Router Plain Routes Configuration
 * @see https://github.com/reactjs/react-router/blob/master/docs/guides/RouteConfiguration.md#configuration-with-plain-routes
 */
import App from './App';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import About from './About/About';

export default {
  path: '/',
  component: App,
  childRoutes: [
    {
      path: '/about',
      component: About,
    },
    {
      path: '/:notesId',
      component: Home,
    },
    {
      path: '*',
      component: NotFound,
      status: 404,
    },
  ],
};
