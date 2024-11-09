let hour = document.getElementById('hour');
let minut = document.getElementById('minut');
let secont = document.getElementById('secont');
let milisecont = document.getElementById("milisecont");
setInterval(() => {
    let timme = new Date();
    hour.innerHTML = (timme.getHours() < 10 ? "0" : "") + timme.getHours()
    minut.innerHTML = (timme.getMinutes() < 10 ? "0" : "") + timme.getMinutes()
    secont.innerHTML = (timme.getSeconds() < 10 ? "0" : "") + timme.getSeconds()

}, 1000)

let timme = new Date();

let years = document.getElementById("years");
let month = document.getElementById("month");
let daynum = document.getElementById("daynum");
let day = document.getElementById("day");

const months = ["January","February","March",
"April","May","June",
"July","August",
"September"
,"October","November",
"December"];

let monthr = months[timme.getMonth()];
document.getElementById("month").innerHTML = monthr;
years.innerHTML = timme.getFullYear()
 const days =[
     "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"

 ]
 let ass = days[timme.getDay()];
 document.getElementById("daynum").innerHTML=ass;
 const daynumber =[
   "0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"
 ]
let yawm = daynumber[timme.getDate()]
document.getElementById("day").innerHTML = yawm;