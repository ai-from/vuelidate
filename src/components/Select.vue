<template>
  <div class="field"
       :class="{error: isError}">
    <div class="mini-title">
      {{ title }}
      <span v-if="isRequired">*</span>
    </div>
    <select
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
      <option
        v-for="(item, index) in options"
        :key="index"
      >
        {{ item }}
      </option>
    </select>
    <div class="error"><span>{{ errorMsg }}</span></div>
  </div>
</template>

<script>
  export default {
    name: 'Select',
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
      options: {
        type: Array,
        default: []
      },
      errorMsg: {
        type: String,
        default: 'Error'
      },
      isError: {
        type: Boolean,
        default: false
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
    .error
      font-size: 12px
      color: $red
      height: 14px
      margin-top: 4px
      span
        display: none
    &.error
      select
        border: 1px solid red
      .error
        span
          display: block
    select
      border: 1px solid $grey
      width: 100%
      height: 40px
      font-size: 14px
</style>