let func = (n1, n2, n3) => n1 + n2 +n3;
console.log( func(1,2,3));

let double = n => n * 2;
console.log( double(3) );

let sayHi = () => alert("Hello");

sayHi();

debugger;

let age = prompt('age?', 18);

let welcome = (age < 18) ?
    () => alert('hello') :
    () => alert('good');
welcome();

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask("are u ok?", () => alert('ok'), () =>(alert('no')));
