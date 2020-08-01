<template>
  <div class="field"
       :class="{error: isError}">
    <div class="mini-title">{{ title }}</div>
    <select
      :multiple="isMultiple"
      :size="size"
      :class="names"
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
      isMultiple: {
        type: Boolean,
        default: false
      },
      size: {
        type: Number,
        default: 1
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
    computed: {
      names: function () {
        return {
          'clients': this.isMultiple === true,
          'doctor': this.isMultiple === false
        }
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
      color: red
      height: 14px
      margin-top: 4px
      span
        display: none
    &.error
      .error
        span
          display: block
    select
      width: 100%
      &.doctor
        height: 40px
</style>