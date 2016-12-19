import style from './style.scss';
import Vue from 'vue'
import VueRouter from 'vue-router';

// Pages
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact/contact';
import EventoCenter from './pages/evento-center';
import EventoDetails from './pages/evento-details';
import EventoEdit from './pages/evento-edit';
import EventoNew from './pages/evento-new';

// Components
import MainNav from './components/main-nav';
import AppFooter from './components/app-footer';

Vue.use(VueRouter);

const routes = [
      {
        path: '/',
        component: Home
      },
      {
        path: '/evento-center',
        component: EventoCenter
      },
      {
        path: '/evento-details',
        component: EventoCenter
      },
      {
        path: '/evento-details/:id',
        component: EventoDetails
      },
      {
        path: '/evento-edit',
        component: EventoCenter
      },
      {
        path: '/evento-edit/:id',
        component: EventoEdit
      },
      {
        path: '/evento-new',
        component: EventoNew
      },
      {
        path: '/contact',
        component: Contact
      },
      {
        path: '/about',
        component: About
      }
    ]

const router = new VueRouter({
  mode: 'history',
  routes
})

const app = new Vue({
  router,
  components: {
    'main-nav': MainNav,
    'app-footer': AppFooter
  }
}).$mount('#app')