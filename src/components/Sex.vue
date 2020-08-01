<template>
  <div class="field sex">
    <div class="mini-title">{{ title }}</div>
    <div class="items">
      <div class="item">
        <label for="male">Мужской</label>
        <input checked id="male" type="radio" name="sex">
      </div>
      <div class="item">
        <label for="female">Женский</label>
        <input id="female" type="radio" name="sex">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Sex',
    props: {
      title: {
        type: String,
        default: 'Sex'
      }
    }
  }
</script>

<style lang="sass" scoped>
  .field
    margin-bottom: 20px
    .mini-title
      font-size: 14px
      margin-bottom: 4px
    .items
      display: grid
      grid-template-columns: repeat(2, min-content)
      grid-gap: 20px
      .item
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