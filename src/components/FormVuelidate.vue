<template>
  <div class="form-vuelidate">

    <form @submit.prevent="onSubmit">

      <div class="title">{{ title }}</div>

      <v-input
        title="Фамилия"
        placeholder="Иванов"
        errorMsg="Error"
        :isError="false"
      />

      <v-input
        title="Имя"
        placeholder="Иван"
        errorMsg="Error"
      />

      <v-input
        title="Отчество"
        placeholder="Иванович"
        errorMsg="Error"
      />

      <v-input
        title="Дата рождения"
        placeholder="05.05.1990"
        errorMsg="Error"
      />

      <v-input
        title="Номер телефона"
        placeholder="+7 999 999 99 99"
        errorMsg="Error"
      />

      <v-sex title="Пол" />

      <v-select
        :isMultiple="true"
        :size="3"
        title="Группа клиентов"
        :options="['VIP', 'Проблемные', 'ОМС']"
        errorMsg="Error"
      />

      <v-select
        title="Лечащий врач"
        :options="['Иванов', 'Захаров', 'Чернышева']"
        errorMsg="Error"
      />

      <v-checkbox
        label="Не отправлять СМС"
        forID="sms"
      />

      <div class="sub-title">Адрес</div>

      <v-input
        title="Индекс"
        placeholder="999999"
        errorMsg="Error"
      />

      <v-input
        title="Страна"
        placeholder="Россия"
        errorMsg="Error"
      />

      <v-input
        title="Область"
        placeholder="Московская"
        errorMsg="Error"
      />

      <v-input
        title="Город"
        placeholder="Москва"
        errorMsg="Error"
      />

      <v-input
        title="Улица"
        placeholder="Центральная"
        errorMsg="Error"
      />

      <v-input
        title="Дом"
        placeholder="77"
        errorMsg="Error"
      />

      <div class="sub-title">Паспорт</div>

      <v-select
        title="Тип документа"
        :options="['Паспорт', 'Свидетельство о рождении', 'Вод. удостоверение']"
        errorMsg="Error"
      />

      <v-input
        title="Серия"
        placeholder="99 99"
        errorMsg="Error"
      />

      <v-input
        title="Номер"
        placeholder="999-999"
        errorMsg="Error"
      />

      <v-input
        title="Кем выдан"
        placeholder="Центральным РОВД"
        errorMsg="Error"
      />

      <v-input
        title="Дата выдачи"
        placeholder="05.05.1990"
        errorMsg="Error"
      />

      <v-button
        btnType="submit"
        title="Отправить"
      />

    </form>

  </div>
</template>

<script>
  import Input from "./Input"
  import Sex from "./Sex"
  import Select from "./Select"
  import Checkbox from "./Checkbox"
  import Button from "./Button"

  export default {
    name: 'FormVuelidate',
    components: {
      'v-input': Input,
      'v-sex': Sex,
      'v-select': Select,
      'v-checkbox': Checkbox,
      'v-button': Button
    },
    data: () => ({
      title: 'Форма регистрации'
    }),
    methods: {
      onSubmit() {
        alert('onSubmit')
      }
    }
  }
</script>

<style lang="sass">
  .form-vuelidate
    width: 350px
    border: 1px solid grey
    margin: 0 auto
    padding: 25px
    font-family: Arial, monospace
    form
      .title
        margin-bottom: 30px
        text-align: center
        font-size: 18px
      .sub-title
        margin: 15px 0
        font-size: 16px
        font-weight: bold
</style>