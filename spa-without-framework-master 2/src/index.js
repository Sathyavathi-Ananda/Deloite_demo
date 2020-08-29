import {Router,Routes} from './libs/router.js'


(()=>{
    const routeConfig = [
        new Routes({
        path:'home',
        url: './views/src/views/detail.html'
    }),
    new Routes({
        path:'shop',
        url: './views/src/views/landing.html'
    },true)]
    
    new Router(routeConfig,'app');
})()