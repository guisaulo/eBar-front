<template>
  <v-container>
    <v-app-bar app color="orange" dark>   
    
      <div class="white--text mb-2">
        <h1>eBar</h1>
      </div>
       
      <v-btn text @click="setPage(0)">
        <span class="purple--text mr-2">Registrar items em comanda</span>
      </v-btn>

      <v-btn text @click="setPage(1)">
        <span class="purple--text mr-2">Fechar Comanda</span>
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