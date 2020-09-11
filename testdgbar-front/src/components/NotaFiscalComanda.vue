<template>
  <v-container id="notaFiscalComanda">
    <table>
        <tr>
            <th>Item</th>
            <th>Valor</th>
        </tr>
        <tr v-for="(item, i) in NotaFiscal.items" :key="i">
            <td>{{item.nome}}</td>
            <td>R$ {{item.valor}}</td>
        </tr>

        <tr>
            <th>
             Desconto
             </th>
            R$ {{NotaFiscal.desconto}}
        </tr>
        <tr>
            <th>
             Valor
             </th>
            R$ {{NotaFiscal.valorTotal}}
        </tr>
    </table>
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
