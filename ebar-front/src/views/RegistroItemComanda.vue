<template>
  <v-container id="registroItemComanda">  
  <ComandaItem />   
  </v-container>
</template>

<script>
import ComandaItem from '@/components/ComandaItem.vue'

export default {
  name: 'RegistroItemComanda',
  components: {
    ComandaItem
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>