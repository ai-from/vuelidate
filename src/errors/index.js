export default{
  surname: function(min = 1, max = 10){
    return `Только буквы. От ${min} до ${max} символов вкл.`
  },
  name: function(min = 1, max = 10){
    return `Только буквы. От ${min} до ${max} символов вкл.`
  },
  patronymic: function(min = 1, max = 10){
    return `Только буквы. От ${min} до ${max} символов вкл.`
  },
  birthday: `Необходимый формат: XX.XX.XXXX`,
  phone: `Необходимый формат: 7 XXX XXX XX XX`,
  clients: `Необходим как минимум один пункт`,
  index: `Только цифры. Формат: XXXXXX`,
  country: function(min = 1, max = 10){
    return `Буквы и знак дефиса. От ${min} до ${max} символов вкл.`
  },
  area: function(min = 1, max = 10){
    return `Буквы и знак дефиса. От ${min} до ${max} символов вкл.`
  },
  city: function(min = 1, max = 10){
    return `Буквы и знак дефиса. От ${min} до ${max} символов вкл.`
  },
  street: function(min = 1, max = 10){
    return `Буквы и знак дефиса. От ${min} до ${max} символов вкл.`
  },
  house: function(max = 10){
    return `Только цифры. До ${max} символов вкл.`
  },
  documentType: `Выберите тип документа`,
  series: `Только цифры. Формат: XX XX`,
  number: `Только цифры. Формат: XXX-XXX`,
  issuedBy: function(min = 1, max = 10) {
    return `Только буквы. От ${min} до ${max} символов`
  },
  date: `Необходимый формат: XX.XX.XXXX`
}
