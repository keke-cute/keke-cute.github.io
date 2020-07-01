let myHeading = document.querySelector('h1');
myHeading.textContent = 'Test Page';
document.querySelector('html').onclick = function() {
    alert('FUCK YOU');
    myHeading.textContent = 'Fuck You';
    let myImg = document.querySelector('img');
    myImg.setAttribute('src', 'https://s1.ax1x.com/2020/07/01/N7aef0.jpg');
}

let myButton = document.querySelector('button');
function setUserName() {
    let MyName = prompt('Please enter your name');
    if(!MyName || MyName === null) {
	setUserName();
    }else {
	localStorage.setItem('name', MyName);
	myHeading.textContent = 'Hello,' + MyName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello,' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
