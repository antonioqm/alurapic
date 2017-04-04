// import Vue from 'vue';
//Vue.directive('meu-transform', {
// Método antigo para registrar a diretiva através de Global View Object. No entanto, 
// podemos ter maior controle do que utilizarmos em nossa aplicação explicitando a importação 
// da diretiva no próprio componente.

export default { 

    bind(el, binding, vnode) {

      let current = 0;

      el.addEventListener('dblclick', function() {

        let incremento = binding.value || 0;

        let efeito; 

        if(!binding.arg || binding.arg == 'rotate') {

          if(binding.modifiers.reverse) {
            current-=incremento;
          } else {
            current+=incremento;
          }
          efeito = `rotate(${current}deg)`;

        } else if(binding.arg == 'scale') {

          efeito = `scale(${incremento})`;
        }

        this.style.transform = efeito;

        if (binding.modifiers.animate) this.style.transition = "transform 0.5s";

      });
    }

};
//});