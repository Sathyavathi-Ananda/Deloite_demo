import {Router,Routes} from './libs/router.js'


(()=>{
    const routeConfig = [
        new Routes({
        path:'home',
        url: './views/src/views/home.html'
    }),
    new Routes({
        path:'shop',
        url: './views/src/views/shop.html'
    },true),
    new Routes({
        path:'magazine',
        url: './views/src/views/magazine.html'
    },true),
    ]
    
    new Router(routeConfig,'app');
})()