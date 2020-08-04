<template>
  <div class="field"
       :class="{error: isError}">
    <div class="mini-title">
      {{ title }}
      <span v-if="isRequired">*</span>
    </div>
    <div class="wrap">
      <div
        class="item"
        v-for="(item, index) in options"
        :key="index"
        @click="itemClick($event)"
      >
        {{ item }}
      </div>
    </div>
    <div class="error"><span>{{ errorMsg }}</span></div>
  </div>
</template>

<script>
  export default {
    name: 'Multiple',
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
    },
    methods: {
      itemClick(e) {
        const i = e.target.classList
        const y = 'selected'
        i.contains(y) ? i.remove(y) : i.add(y)

        const list = e.target.parentNode.querySelectorAll('.'+y)
        const values = Array.prototype.slice.call(list).map(x => x.innerText)

        this.$emit('input', values)
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
    .wrap
      width: 100%
      height: 50px
      overflow-y: auto
      border: 1px solid $grey
      .item
        font-size: 14px
        cursor: pointer
        &.selected
          background: $grey
    .error
      font-size: 12px
      color: $red
      height: 14px
      margin-top: 4px
      span
        display: none
    &.error
      .wrap
        border: 1px solid red
      .error
        span
          display: block
</style>