//https://github.com/SPSMB
/*
// Const promnena co se nemneni
const PI = 3.14;
// Console vypise zavorku (number)
console.log(number)
// Let promenana co se muze mnenit
let number = 0;
console.log(number);
number = 10;
console.log(number)
.onclick na kliknutí
() => {} arrow funkce
*/

    //numberOfCookies = numberOfCookies +1;
    //numberOfCookies +=1
    //++ inkrement zvetsuje cislo o 1
    //--dekrement zmenusje cislo o 1
//counter.innerText = `Cookies:  ${Counter}`;
const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const buyg = document.getElementById("buyg");
const buyc = document.getElementById("buyc");


let count = 0;
let earnedcookies = 1;
let upgradecostg = 50;
let upgradecostc = 100;
let autoClickIncerase = 5;
let autoclicker;

cookie.addEventListener('click', CookieClicker);

function CookieClicker(){

    count+= earnedcookies
    counter.innerText = "Cookies: " + count
}

buyg.onclick = () => {
    if (count >= upgradecostg) {
    //odečíst sušenky
    //aplikovat upgrade
    count -= upgradecostg;
    counter.innerText = "Cookies: " + count
    earnedcookies+= 5
    upgradecostg +=50
    buyg.innerText = "Buy upgrade: " + upgradecostg
    }  
}
buyc.onclick = () => {
    if (count >= upgradecostc){
    count -= upgradecostc;
    counter.innerText = "Cookies: " + count
    clearInterval(autoclicker);
    autoclicker = setInterval(() => {
        console.log("interval")
        count += autoClickIncerase;
        counter.innerText = "Cookies: " + count;
    }, 1000);
    upgradecostc +=200
    buyc.innerText = "Auto clicker: " + upgradecostc
}
}
function cheats(){
    count+=10000
    counter.innerText = "Cookies: " + count
}