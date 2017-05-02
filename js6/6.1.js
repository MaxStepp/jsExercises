/**
 * Created by maxim on 02.05.17.
 * У объекта есть свойство className, которое хранит список css класов – слов, разделенных пробелами:
 var obj = {
  className: 'open menu'
};
 Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:
 */
var obj = {
    className: 'open menu close'
};

function removeClass(obj, cls) {
    var propArr = obj.className.split(' ');
    for(var i = 0; i < propArr.length; i++){
        if (propArr[i] == cls){
            delete propArr[i];
        }
    }
    console.log(propArr);
    return obj.className = (propArr.length == 1) ? propArr.join('') : propArr.join(' ');
}
removeClass(obj, "open");
console.log(obj.className);
