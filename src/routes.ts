// site views
import { LandingPage } from 'pages';
// dashboard views
// auth views
import { SignIn, SignUp } from 'pages';

let routes = [
    {
        path: '/',
        name: 'Home',
        icon: '',
        component: LandingPage,
        layout: '/site',
        key: 1,
        type: 'menu'
    },
    {
        path: '/',
        name: 'Account',
        icon: '',
        component: '',
        layout: '/dashboard',
        key: 1,
        type: 'menu'
    },
    {
        path: '/property',
        name: 'Property',
        icon: '',
        component: '',
        layout: '/dashboard',
        key: 2,
        type: 'menu'
    },
    {
        path: '/signup',
        name: 'SignUp',
        icon: '',
        component: SignUp,
        layout: '/auth',
        key: 3,
        type: 'menu',
    },
    {
        path: '/signin',
        name: 'SignIn',
        icon: '',
        component: SignIn,
        layout: '/auth',
        key: 4,
        type: 'menu',
    }
]

export default routes;