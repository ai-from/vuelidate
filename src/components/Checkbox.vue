<template>
  <div class="field">
    <label class="label" :for="forID">{{ label }}</label>
    <input
      :id="forID"
      type="checkbox"
      @click="$emit('click')"
      >
  </div>
</template>

<script>
  export default {
    name: 'Checkbox',
    props: {
      label: {
        type: String,
        default: 'Label'
      },
      forID: {
        type: String,
        default: 'forID'
      }
    }
  }
</script>

<style lang="sass" scoped>
  .field
    display: grid
    grid-template-columns: repeat(2, min-content)
    grid-gap: 5px
    align-items: center
    label
      font-size: 14px
      cursor: pointer
      white-space: nowrap
    input
      width: 20px
      height: 20px
      cursor: pointer

</style>