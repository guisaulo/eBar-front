<template>
  <v-app>
    <NavigationBar />
    <v-main>
    <RegistroItemComanda v-if="IsPageRegistroItemComanda"/>
    <FechamentoComanda v-if="IsPageFechamentoComanda" />
    </v-main>
  </v-app>
</template>

<script>
import RegistroItemComanda from '@/views/RegistroItemComanda.vue'
import FechamentoComanda from '@/views/FechamentoComanda.vue'
import NavigationBar from '@/components/NavigationBar.vue'

export default {
  name: 'App',
  components: {
    RegistroItemComanda,
    FechamentoComanda,
    NavigationBar
  },
  computed: {
    IsPageRegistroItemComanda: function() {return this.$store.state.page==0},
    IsPageFechamentoComanda: function() {return this.$store.state.page==1}
  }
};

</script>