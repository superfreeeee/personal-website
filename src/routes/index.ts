import { IconType } from '@components/Icon';
import About from '@containers/About';
import Blog from '@containers/Blog';
import Contact from '@containers/Contact';
import Home from '@containers/Home';
import Works from '@containers/Works';
import { RouteConfig } from './interface';

const routes: RouteConfig[] = [
  {
    path: '/',
    icon: IconType.Logo,
    label: 'Home',
    component: Home,
  },
  {
    path: '/about',
    icon: IconType.Blogger,
    label: 'About me',
    component: About,
  },
  {
    path: '/blog',
    icon: IconType.Blogger,
    label: 'Blog',
    component: Blog,
  },
  {
    path: '/works',
    icon: IconType.Apps,
    label: 'Works',
    component: Works,
  },
  {
    path: '/contact',
    icon: IconType.User,
    label: 'Contact me',
    component: Contact,
  },
];

export default routes;
