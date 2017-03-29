<template>
  <div>
    <h2>{{count}}</h2>
    <button @click='doAdd'>+</button>
    <button @click='doMinus'>-</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Vuextest',
  computed: {
    ...mapGetters([
      'count'
    ])
  },
  methods: {
    ...mapActions([
      'doAdd',
      'doMinus'
    ])
  }
}
</script>

<style scoped>

</style>