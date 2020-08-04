<template>
  <button :type="btnType">{{ title }}</button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      title: {
        type: String,
        default: 'Title'
      },
      btnType: {
        type: String,
        default: 'text'
      }
    }
  }
</script>

<style lang="sass" scoped>
  button
    height: 40px
    padding: 0 25px
    margin: 15px 0
    border: none
    cursor: pointer
    font-size: 16px
    &.green
      background: $green
      color: $white
</style>