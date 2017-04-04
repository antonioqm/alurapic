import Home from './components/home/Home.vue';
//import Cadastro from './components/cadastro/Cadastro.vue';
const Cadastro = () => System.import('./components/cadastro/Cadastro.vue')


export const routes = [
  /* rotas aqui */


    { path: '/home', name: 'home', component: Home, titulo: 'Home', menu: true },
    { path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: 'Cadastro de Fotos', menu: true },
    { path: '/cadastro/:id', name: 'altera', component: Cadastro, titulo: 'Cadastro de Fotos', menu: false },
    { path: '*', component: Home, menu: false } 
];
