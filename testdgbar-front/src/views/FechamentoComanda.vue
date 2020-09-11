<template>
  <v-container id="fechamentoComanda">

    <p>Selecione uma comanda</p>
    <Comandas />
    <NotaFiscalComanda />

  </v-container>
</template>

<script>
import Comandas from '@/components/Comandas.vue'
import NotaFiscalComanda from '@/components/NotaFiscalComanda.vue'

export default {
  name: 'FechamentoComanda',
  components: {
    Comandas,
    NotaFiscalComanda
  },
  methods:{

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
