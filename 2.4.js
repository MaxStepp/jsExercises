/**
 * Created by Max on 20.04.2017.
 * Перепишите if..else с использованием нескольких операторов '?':
 var name = 'admin', text;

 if (name == 'admin') {
  text = 'Hi';
} else if (name == 'manager') {
  text = 'Hello';
} else if (name == '') {
  text = 'No login';
} else {
  text = '';
}

 */
var a = 1, b = 1;
var result = (a + b >= 3)? 'yep': 'Noup!';
alert(result);


var name = 'admin' , text;
text = (name == 'admin')? 'Hi': (name == 'manager')? 'Hello': (name == '')? 'No login': '';
alert('text: ' + text);