/*Условие: 
Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора
*/
// Решение(1): 
let age = prompt("Напиши сколько тебе лет", " ");
if (!(age >=14 && age <=90)) {alert("Goodbye")}
else{alert("OK")}
// Решение(2)
let age = prompt("Напиши сколько тебе лет", " ");
if (age<14 || age>90) {alert("Goodbye")}
else{alert("OK")}
