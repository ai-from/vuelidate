<template>
  <div class="field"
       :class="{error: isError}">
    <div class="mini-title">
      {{ title }}
      <span v-if="isRequired">*</span>
    </div>
    <select
      multiple
      :size="size"
      :value="value"
      @input="$emit('input', selected($event))"
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
    name: 'MultipleSelect',
    props: {
      value: {},
      isRequired: {
        type: Boolean,
        default: false
      },
      size: {
        type: Number,
        default: 3
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
    },
    methods: {
      selected(e) {
        const values = [...e.target.options].filter(x => x.selected).map(x => x.value)
        return values
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
    select
      width: 100%
      option
        font-size: 14px
        cursor: pointer
    .error
      font-size: 12px
      color: red
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
</style>