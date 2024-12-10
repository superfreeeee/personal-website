import { About } from '@/containers/About';
import { Blog } from '@/containers/Blog';
import { Contact } from '@/containers/Contact';
import { Home } from '@/containers/Home';
// import { Works } from '@/containers/Works';
import { RouteConfig } from './interface';

export const routes: RouteConfig[] = [
  {
    path: '/',
    label: 'Home',
    component: Home,
  },
  {
    path: '/about',
    label: 'About',
    component: About,
  },
  {
    path: '/blog',
    label: 'Blog',
    component: Blog,
  },
  // {
  //   path: '/works',
  //   label: 'Works',
  //   component: Works,
  // },
  {
    path: '/contact',
    label: 'Contact',
    component: Contact,
  },
];
