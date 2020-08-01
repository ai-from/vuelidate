<template>
  <div id="app">
    <v-form />
  </div>
</template>

<script>
import FormVuelidate from "./components/FormVuelidate";

export default {
  name: 'App',
  components: {
    'v-form': FormVuelidate
  }
}
</script>

<style lang="sass">

</style>
