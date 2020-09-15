<template>
  <v-container id="notaFiscalComanda">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <th class="text-left">Item</th>
          <th class="text-left">Valor</th>
        </thead>
        <tbody>
          <tr v-for="(item, i) in NotaFiscal.items" :key="i">
            <td>{{item.nome}}</td>
            <td>R$ {{item.valor}}</td>
          </tr>
          <tr>
            <td>Desconto</td>
            <td>R$ {{NotaFiscal.desconto}}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>R$ {{NotaFiscal.valorTotal}}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-btn @click="resetarComanda">Resetar Comanda</v-btn>
  </v-container>
</template>

<script>
import ComandaItemAPI from '@/api/comandaitem-api'

  export default {
    name: 'NotaFiscalComanda',
    data(){
        return{
            NotaFiscal: ""
        }
    },
    computed: {
      selectedComanda () {
        return this.$store.state.selectedComanda
      },
    },
    methods:{
        gerarNotaFiscalComanda(){
            ComandaItemAPI.gerarNotaFiscalComanda(this.selectedComanda)
            .then(res => this.NotaFiscal=res.data)
        },
        resetarComanda(){
            ComandaItemAPI.resetarComanda(this.selectedComanda)
            .then(() => this.NotaFiscal={"desconto": 0, "valorTotal": 0})
        }
    },
    watch:{
        selectedComanda(){
            this.gerarNotaFiscalComanda()
        }
    }
  }
</script>
