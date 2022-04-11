import Users from './compoents/pages/Users';
import Home from './compoents/pages/Home';
import Movies from './compoents/pages/Movies';
import User from './compoents/pages/User';



export default [
   {
    path: '/',
    component: Home
  },
  {
    path: '/movies',
    component: Movies
  },

  {
    path: '/users',
    component: Users
  },
  {
    path: '/users/:id',
    component: User
  }


]
