<template>
  <v-container id="comandas">
    <v-app>
    <v-card
      class="mx-auto"
      max-width="300"
      tile
    >
      <v-list dense>
        <v-subheader>Comandas</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(comanda, i) in comandas"
            :key="i"
            @click="selecionarComanda(comanda.id)"
          >
            <v-list-item-content>
              <v-list-item-title v-text="comanda.nome"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-app>
  </v-container>
</template>

<script>
  export default {
    name: 'Comandas',
    data: () => ({
      selectedComanda: 0,
      resposta: ""
    }),
    computed: {
      comandas () {
        return this.$store.state.comandas
      }
    },
    methods:{
      selecionarComanda(comandaId){
        this.$store.dispatch('setComanda', comandaId)
      },
    },
    mounted(){
      this.$store.dispatch('setComandas')
    }
  }
</script>
