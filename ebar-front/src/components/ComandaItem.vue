<template>
  <v-container id="comandaItem" fluid>    
    
    <v-row align="left" style="height:100vh" no-gutters dense>      

        <v-card flat>
          <v-card-text>Selecione o Item</v-card-text>
          <Items />
        </v-card>

        <v-card flat>
          <v-card-text>Seleciona a Comanda</v-card-text>
          <Comandas />
        </v-card>

        <v-card flat>
          <v-btn @click="inserirItemComanda(selectedComanda, selectedItem)">Inserir</v-btn>
        </v-card>
          
    </v-row>

    <v-dialog v-model="dialog" max-width="500">{{resposta}}</v-dialog>

  </v-container>
</template>

<script>
import Comandas from '@/components/Comandas.vue'
import Items from '@/components/Items.vue'
import ComandaItemAPI from '@/api/comandaitem-api'

export default {
  name: 'ComandaItem',
  data(){
    return{
      resposta: "",
      dialog: false,
    }
  },
  components: {
    Comandas,
    Items
  },
  computed: {
    selectedComanda () {
        return this.$store.state.selectedComanda
      },
    selectedItem () {
      return this.$store.state.selectedItem
    }
  },
  methods: {
    inserirItemComanda(selectedComanda, selectedItem){
      ComandaItemAPI.inserirItemComanda(selectedComanda, selectedItem)
      .then(res=>{
        this.resposta=res.data
        this.dialog=true
      })
      .catch(error=> {
        this.resposta=error.response.data
        this.dialog=true
      })
    }
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
