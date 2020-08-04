<template>
  <div class="field"
       :class="{error: isError}">
    <div class="mini-title">
      {{ title }}
      <span v-if="isRequired">*</span>
    </div>
    <div class="wrap">
      <div
        v-for="(item, index) in optionsReady"
        :key="index"
        class="item"
        :class="{selected: item.selected}"
        @click="itemClick(item)"
      >
        {{ item.value }}
      </div>
    </div>
    <div class="error"><span>{{ errorMsg }}</span></div>
  </div>
</template>

<script>
  export default {
    name: 'MultipleSelect',
    props: {
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
    data: () => ({
      optionsReady: []
    }),
    methods: {
      itemClick(i) {
        i.selected ? i.selected = false : i.selected = true
        const values = this.optionsReady.filter(x => x.selected).map(x => x.value)
        this.$emit('input', values)
      }
    },
    mounted() {
      const obj = []
      this.options.forEach(i => {obj.push({value: i, selected: false})})
      this.optionsReady = obj
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