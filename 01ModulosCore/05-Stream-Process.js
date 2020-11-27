'use strict'

var stdin = process.stdin;
var stdout = process.stdout;
var person = {
    name: null,
    age: 0
};

function saveAge(age) {
    var esMayor = '';
    person.age = age;

    esMayor = (person.age>=18) ? 'es mayor de edad' : 'es menor de edad';

    stdout.write(
        person.name
      + ' '
      + esMayor
      + ', tiene '
      + person.age
      + ' '
      + 'años.\n'
  );

  process.exit();
}

function saveName(name) {
    person.name = name;
    var question = `Hola ${person.name}, ¿How many years you have?`;
    
    quiz(question, saveAge);
}

function quiz(question, callback) {
    stdin.resume();
    stdout.write(question + ': ');

    stdin.once('data', function(res) {
        callback(res.toString().trim())
    });
}

stdin.setEncoding('utf8');
quiz('What is your name?', saveName);