/**
 * Created by Max on 27.04.2017.
 * Напиште код который выведет сотрудника который выполнил больше всех задач.
 Например:
 var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 100,
  'Anton': 99
};
 */
var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 100,
    'Anton': 99
};
var max = 0, workerName;
for (var name in tasksCompleted){
    if (tasksCompleted[name] > max){
        max = tasksCompleted[name];
        workerName = name;
    }
}
console.log(max , workerName);
