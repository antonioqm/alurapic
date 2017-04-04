import Vue from 'vue';
import App from './App.vue';

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import VeeValidate from 'vee-validate';

// tem que vir entre chaves, porque não é default
import { routes } from './routes';

// importando o arquivo `Transform.js`.
import './directives/Transform';

//importar mensagens do VeeValidate em portugues
import msgBR from './pt_BR';

//Importar Bootstrap - necessário de um loader de css c/ webpack
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery/dist/jquery.js';

//Importar CSS local
import './assets/css/teste.css'; 


Vue.use(VueResource);
//Vue.http.options.root = 'http://localhost:3000';
Vue.http.options.root = process.env.API_URL ? process.env.API_URL : 'http://localhost:3000';


/* Vue.http.interceptors.push((req, next) => {

    // é possível colocar informações no header antes do envio da requisição
    req.headers.set('Authorization', 'informação de segurança aqui');
    console.log('Lidando com o request');

    next(res => {
      console.log('Lidando com a resposta')
      // é possível acessar os dados da reposta e realizar transformações antes
      console.log(res.body);
    });

});
*/


Vue.use(VueRouter);

Vue.use(VeeValidate, {
    locale: 'pt_BR',
    dictionary: { 
        pt_BR: { messages: msgBR }
    }
});


const router = new VueRouter({
  routes, 
  mode: 'history'
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
