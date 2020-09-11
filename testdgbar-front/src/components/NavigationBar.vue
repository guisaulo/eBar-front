<template>
  <v-container>
    <v-app-bar
      app
      color="primary"
      dark
    >

      <div class="white--text mb-2">
        <h1>Teste / Bar do DG</h1>
      </div>
                    
      <v-btn
        text
        @click="setPage(0)"
      >
        <span class="mr-2">Registrar items em comanda</span>
      </v-btn>

      <v-btn
        text
        @click="setPage(1)"
      >
        <span class="mr-2">Fechar Comanda</span>
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
  export default {
    name: 'NavigationBar',
    computed:{
      page: function() {return this.page},
    },
    methods:{
      setPage(page){
        this.$store.dispatch('setPage', page)
      }
    }
  }
</script>
