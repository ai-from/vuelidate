<template>
  <div class="form-vuelidate">

    <form @submit.prevent="onSubmit">

      <div class="title">{{ title }}</div>

      <v-input
        :isRequired="true"
        title="Фамилия"
        placeholder="Иванов"
        :errorMsg="errors.surname($v.surname.$params.minLength.min, $v.surname.$params.maxLength.max)"
        v-model="surname"
        :isError="$v.$dirty && $v.surname.$invalid"
      />

      <v-input
        :isRequired="true"
        title="Имя"
        placeholder="Иван"
        :errorMsg="errors.name($v.name.$params.minLength.min, $v.name.$params.maxLength.max)"
        v-model="name"
        :isError="$v.$dirty && $v.name.$invalid"
      />

      <v-input
        title="Отчество"
        placeholder="Иванович"
        :errorMsg="errors.patronymic($v.patronymic.$params.minLength.min, $v.patronymic.$params.maxLength.max)"
        v-model="patronymic"
        :isError="$v.$dirty && $v.patronymic.$invalid"
      />

      <v-input
        :isRequired="true"
        title="Дата рождения"
        placeholder="05.05.1990"
        :errorMsg="errors.birthday"
        v-model="birthday"
        :isError="$v.$dirty && $v.birthday.$invalid"
      />

      <v-input
        :isRequired="true"
        title="Номер телефона"
        placeholder="7 999 999 99 99"
        :errorMsg="errors.phone"
        v-model="phone"
        :isError="$v.$dirty && $v.phone.$invalid"
      />

      <v-sex title="Пол" />

      <v-multiple-select
        class="clients"
        :isRequired="true"
        title="Группа клиентов"
        :options="['VIP', 'Проблемные', 'ОМС']"
        :errorMsg="errors.clients"
        v-model="clients"
        :isError="$v.$dirty && $v.clients.$invalid"
        @input="multipleInput"
      />

      <v-select
        class="doctor"
        title="Лечащий врач"
        :options="['Иванов', 'Захаров', 'Чернышева']"
        v-model="doctor"
        :isError="$v.$dirty && $v.doctor.$invalid"
      />

      <v-checkbox
        label="Не отправлять СМС"
        forID="sms"
        v-model="noSMS"
        @click="checkboxClick"
      />

      <div class="sub-title">Адрес</div>

      <v-input
        title="Индекс"
        placeholder="999999"
        :errorMsg="errors.index"
        v-model="index"
        :isError="$v.$dirty && $v.index.$invalid"
      />

      <v-input
        title="Страна"
        placeholder="Россия"
        :errorMsg="errors.country($v.country.$params.minLength.min, $v.country.$params.maxLength.max)"
        v-model="country"
        :isError="$v.$dirty && $v.country.$invalid"
      />

      <v-input
        title="Область"
        placeholder="Московская"
        :errorMsg="errors.area($v.area.$params.minLength.min, $v.area.$params.maxLength.max)"
        v-model="area"
        :isError="$v.$dirty && $v.area.$invalid"
      />

      <v-input
        :isRequired="true"
        title="Город"
        placeholder="Москва"
        :errorMsg="errors.city($v.city.$params.minLength.min, $v.city.$params.maxLength.max)"
        v-model="city"
        :isError="$v.$dirty && $v.city.$invalid"
      />

      <v-input
        title="Улица"
        placeholder="Центральная"
        :errorMsg="errors.street($v.street.$params.minLength.min, $v.street.$params.maxLength.max)"
        v-model="street"
        :isError="$v.$dirty && $v.street.$invalid"
      />

      <v-input
        title="Дом"
        placeholder="77"
        :errorMsg="errors.house($v.house.$params.maxLength.max)"
        v-model="house"
        :isError="$v.$dirty && $v.house.$invalid"
      />

      <div class="sub-title">Паспорт</div>

      <v-select
        :isRequired="true"
        class="document-type"
        title="Тип документа"
        :options="['Паспорт', 'Свидетельство о рождении', 'Вод. удостоверение']"
        :errorMsg="errors.documentType"
        v-model="documentType"
        :isError="$v.$dirty && $v.documentType.$invalid"
      />

      <v-input
        title="Серия"
        placeholder="99 99"
        :errorMsg="errors.series"
        v-model="series"
        :isError="$v.$dirty && $v.series.$invalid"
      />

      <v-input
        title="Номер"
        placeholder="999-999"
        :errorMsg="errors.number"
        v-model="number"
        :isError="$v.$dirty && $v.number.$invalid"
      />

      <v-input
        title="Кем выдан"
        placeholder="Центральным РУВД"
        :errorMsg="errors.issuedBy($v.issuedBy.$params.minLength.min, $v.issuedBy.$params.minLength.max)"
        v-model="issuedBy"
        :isError="$v.$dirty && $v.issuedBy.$invalid"
      />

      <v-input
        :isRequired="true"
        title="Дата выдачи"
        placeholder="05.05.1990"
        :errorMsg="errors.date"
        v-model="date"
        :isError="$v.$dirty && $v.date.$invalid"
      />

      <v-button
        btnType="submit"
        title="Отправить"
        class="green"
      />

      <div class="note">
        Поля, отмеченные звездочкой (*), обязательны для заполнения
      </div>

      <div class="res">
        <div v-if="!$v.$invalid && this.goodForm" class="ok">Форма отправлена</div>
        <div v-if="$v.$invalid && !this.goodForm" class="error">В форме содержатся ошибки</div>
      </div>

    </form>

  </div>
</template>

<script>
  import {required, minLength, maxLength} from "vuelidate/lib/validators"
  import {dateFormat, phoneFormat, indexFormat, namingFormat, houseFormat, seriesFormat, numberFormat} from "../validators"
  import errors from "@/errors"
  import Input from "./Input"
  import Sex from "./Sex"
  import Select from "./Select"
  import MultipleSelect from "./MultipleSelect"
  import Checkbox from "./Checkbox"
  import Button from "./Button"

  export default {
    name: 'FormVuelidate',
    data: () => ({
      errors,
      title: 'Форма регистрации',
      goodForm: true,
      surname: '',
      name: '',
      patronymic: '',
      birthday: '',
      phone: '',
      sex: '',
      clients: '',
      doctor: '',
      noSMS: false,
      index: '',
      country: '',
      area: '',
      city: '',
      street: '',
      house: '',
      documentType: '',
      series: '',
      number: '',
      issuedBy: '',
      date: ''
    }),
    validations: {
      surname: {required, namingFormat, minLength: minLength(2), maxLength: maxLength(40)},
      name: {required, namingFormat, minLength: minLength(2), maxLength: maxLength(40)},
      patronymic: {namingFormat, minLength: minLength(2), maxLength: maxLength(40)},
      birthday: {required, dateFormat},
      phone: {required, phoneFormat},
      sex: {},
      clients: {required},
      doctor: {},
      noSMS: {},
      index: {indexFormat},
      country: {namingFormat, minLength: minLength(2), maxLength: maxLength(40)},
      area: {namingFormat, minLength: minLength(2), maxLength: maxLength(40)},
      city: {required, namingFormat, minLength: minLength(2), maxLength: maxLength(40)},
      street: {namingFormat, minLength: minLength(2), maxLength: maxLength(40)},
      house: {houseFormat, maxLength: maxLength(5)},
      documentType: {required},
      series: {seriesFormat},
      number: {numberFormat},
      issuedBy: {namingFormat, minLength: minLength(2), maxLength: maxLength(100)},
      date: {required, dateFormat}
    },
    components: {
      'v-input': Input,
      'v-sex': Sex,
      'v-select': Select,
      'v-multiple-select': MultipleSelect,
      'v-checkbox': Checkbox,
      'v-button': Button
    },
    methods: {
      onSubmit() {
        this.$v.$touch()
        this.$v.$invalid ? this.goodForm = false : this.goodForm = true
      },
      checkboxClick() {
        this.noSMS = !this.noSMS
      },
      multipleInput(val) {
        this.clients = val
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
    form
      .title
        margin-bottom: 30px
        text-align: center
        font-size: 18px
      .sub-title
        margin: 15px 0
        font-size: 16px
        font-weight: bold
      .res
        font-size: 14px
        height: 16px
        .error
          color: $red
        .ok
          color: $green
      .note
        font-size: 14px
        margin: 5px 0

  @media screen and (max-width: 374px)
    .form-vuelidate
      width: 100%
      padding: 10px
</style>