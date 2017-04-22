/**
 * Created by Max on 22.04.2017.
 * Исправьте предыдущую задачу FizzBuzz так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на3, и на 5.
 */
for(var i = 1; i <= 100; i++){
    if(i % 3 == 0){
        if(i % 5 == 0){
            console.log("FizzBuzz");
        }else {
            console.log("Fizz")
        }
    }else if(i % 5 == 0){
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
