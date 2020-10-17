// site views
import { LandingPage } from 'pages';
// dashboard views
import { AddProperty, Profile } from 'pages';
// auth views
import { SignIn, SignUp } from 'pages';

let routes = [
    {
        path: '',
        name: 'Home',
        icon: '',
        component: LandingPage,
        layout: '/site',
        key: 1,
        type: 'menu'
    },
    {
        path: '/profile',
        name: 'Account',
        icon: '',
        component: Profile,
        layout: '/dashboard',
        key: 2,
        type: 'menu'
    },
    {
        path: '/',
        name: 'Property',
        icon: '',
        component: '',
        layout: '/dashboard',
        key: 'sub1',
        type: 'submenu',
        child: [
            {
                path: '/property/list',
                name: 'My Properties',
                icon: '',
                component: '',
                layout: '/dashboard',
                key: 3
            },
            {
                path: '/property/add',
                name: 'Add Property',
                icon: '',
                component: AddProperty,
                layout: '/dashboard',
                key: 4
            }
        ]
    },
    {
        path: '/signup',
        name: 'SignUp',
        icon: '',
        component: SignUp,
        layout: '/auth',
        key: 5,
        type: 'menu',
    },
    {
        path: '/signin',
        name: 'SignIn',
        icon: '',
        component: SignIn,
        layout: '/auth',
        key: 6,
        type: 'menu',
    }
]

export default routes;