/* Условие: 
Напишите код, который будет спрашивать логин с помощью prompt.

Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

Пароль проверять так:

Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено».
*/
// Решение: 
let userLogin = prompt("Ваш логин", '');

if (userLogin === 'Админ') {

  let passUser = prompt('Ваш пароль', '');

  if (passUser === 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (passUser === '' || pass === null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userLogin === '' || userLogin === null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}
// Мой код идентичен решению на сайте, так как у меня была небольшая ошибка по оформлению - я решила, что  использую оформление, которое было дано на сайте
