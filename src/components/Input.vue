<template>
  <div class="field"
       :class="{error: isError}">
    <div class="mini-title">
      {{ title }}
      <span v-if="isRequired">*</span>
    </div>
    <input
      type="text"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    <div class="error"><span>{{ errorMsg }}</span></div>
  </div>
</template>

<script>
  export default {
    name: 'Input',
    props: {
      value: {},
      isRequired: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: 'Title'
      },
      placeholder: {
        type: String,
        default: 'Placeholder'
      },
      errorMsg: {
        type: String,
        default: 'Error'
      },
      isError: {
        type: Boolean,
        default: false
      },
      model: {
        type: '',
        default: ''
      }
    }
  }
</script>

<style lang="sass" scoped>
  .field
    margin-bottom: 7px
    .mini-title
      font-size: 14px
      margin-bottom: 4px
    input
      height: 40px
      width: 100%
      border: 1px solid $grey
      padding: 0 15px
    .error
      font-size: 12px
      color: $red
      height: 14px
      margin-top: 4px
      span
        display: none
    &.error
      input
        border: 1px solid red
      .error
        span
          display: block
</style>