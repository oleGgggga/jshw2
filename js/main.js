let USERname = prompt('Ваше имя');
let age = +prompt('Возраст');
let city = prompt('Город проживания');
let phone = prompt('Номер телефона');
let email = prompt('Почта');
let company = prompt('Место работы');
console.log(`Меня зовут ${USERname}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}.`);
//////
let currenYear = 2022;
let birthYear = currenYear - age;
console.log(`${USERname} родился в ${birthYear} году.`);
///////
let row = +prompt('6 чисел');
let first_part = row[0] + row[1] + row[2];
let second_part = row[3] + row[4] + row[5];
let result = (first_part == second_part) ? true : false;
console.log(result);
///////
let number = +prompt('число');
if (number > 0) {
    console.log("положительное");
}
else if (number == 0) {
    console.log("ноль");
}
else {
    console.log("отрицательное");
}
///////
let a = 10;
let b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);
////////
if (a > 2 && a < 11 || b >= 6 && b < 14) {
    console.log('true');
} else {
    console.log('false');
}
////////
let n = prompt('Введите число от 0 до 59');
if (n >= 0 && n <= 15) {
    console.log('Первая четверть');
} else if (n > 15 && n <= 30) {
    console.log('Вторая четверть');
} else if (n > 30 && n <= 45) {
    console.log('Третья четверть');
} else {
    console.log('Четвертая четверть');
}
////////
let day = prompt('Введите число от 1 до 31')
if (day >= 1 && day <= 11) {
    console.log('Первая декада');
} else if (day > 11 && day <= 21) {
    console.log('Вторая декада');
} else {
    console.log('Третья декада');
}
////////
