<template>
    <button :class="estiloDoBotao" :type="tipo" @click="disparaAcao()">{{rotulo}}</button>
</template>

<script>

export default {

// props: ['tipo', 'rotulo', 'confirmacao', 'estilo'],
// refatorando os props com validações
props: {
    tipo: {
        required: true,
        type: String
    },
    rotulo: {
        required: true,
        type: String
    },
    confirmacao: Boolean,
    estilo: String

},



methods: {

       disparaAcao() {
           console.log(typeof(this.confirmacao));
           if(this.confirmacao) {
               if(confirm('Confirma operacao?')) {
                    this.$emit('botaoAtivado');
                }
                return;
           }
           this.$emit('botaoAtivado');
       }

},

computed: {

       estiloDoBotao() {

           // se o valor é padrão ou não passou nada para estilo
           if(this.estilo == 'padrao' || !this.estilo) return 'botao botao-padrao';

           if(this.estilo == 'perigo') return 'botao botao-perigo';
       }
   }
}


</script>

<style scoped lang="sass">

    @import './Botao.scss';

</style>
