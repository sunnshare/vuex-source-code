<template>
  <div id="app">
    <p>{{ $store.state.age }}</p>
    <p>{{ $store.getters.myAge }}</p>
    <button @click="$store.commit('add', 1)">mutation add 1</button>&nbsp;
    <button @click="$store.dispatch('add', 2)">action add 2</button>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    console.log(this.$store);
  },
};
</script>
