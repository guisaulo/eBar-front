<template>
  <v-container id="items">
    <v-app id="items">
    <v-card
      class="mx-auto"
      max-width="300"
      tile
    >
      <v-list dense>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="selecionarItem(item.id)"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.nome"></v-list-item-title>
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
    name: 'items',
    data: () => ({
      selectedItem: 0,
      resposta: ""
    }),
    computed: {
      items () {
        return this.$store.state.items
      }
    },
    methods:{
      selecionarItem(itemId){
        this.$store.dispatch('setItem', itemId)
      },
    },
    mounted(){
      this.$store.dispatch('setItems')
    }
  }
</script>
