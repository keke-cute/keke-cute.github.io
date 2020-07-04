function showMessage(form, text) {
    form = '*' + form + '*';
    console.log( form + ':' + text);
}

let form = "keke";
showMessage(form ,"hello");

let func = showMessage;
func(form, 'fuck');

let sayHi = function() {
    console.log('hi');
};
console.log(sayHi);

function ask(question, yes, no){
    if (confirm(question)) {
	yes();
    }else {
	no();
    }}
function showOk() {
    alert("you agreed.");
}
function showCancel() {
    alert("you canceled");
}

ask("do you agree?", showOk,showCancel);

function ask2(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
ask2(
    "do you agree?",
    function() {alert("agreed");},
    function() {alert('canceled');}
);

let sum = function(a , b) {
    return a + b;
};
alert(sum(1,2));
