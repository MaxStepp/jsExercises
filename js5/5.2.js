/**
 * Created by Max on 28.04.2017.
 * Задание 2 (Изменение численных свойств)
 * Напишите функцию multiplyNumeric которая принимает на вход объект и возвращает объект в котором все числовые значения у свойств умножены на 2.
 // Before
 var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

 multiplyNumeric(image);

 // after
 image = {
    width: 200,
    height: 800,
    title: 'Cool image'
};
 */
var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

function multiplyNumeric(obj) {
    for (var prop in obj){
        if (typeof obj[prop] == "number"){
            obj[prop]=obj[prop] * 2;
        }
    }
}
console.log(image.width);
multiplyNumeric(image);
for (var pro in image){
    console.log(image[pro]);
}