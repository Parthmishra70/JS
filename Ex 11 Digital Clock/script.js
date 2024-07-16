// //  Ex> create  a digital seconds clock using Setintervl and Date object in js the date object can b used to ge th datetime hours and seconds which can the be updated using setintervl  try to rap the ui good quality


let seconds = 0;
let minute = 1;
let hour = 1;


let hourele = document.getElementsByClassName("hour");
let minuteele = document.getElementsByClassName("minute");
let secondsele = document.getElementsByClassName("seconds");


let Dhour = document.createElement("h1");
let Dminute = document.createElement("h1");
let Dseconds = document.createElement("h1");

function displayhour(val) {
  Dhour.innerText = val
  hourele[0].appendChild(Dhour)
}

function displayminute(val) {
  Dminute.innerText = val
  minuteele[0].appendChild(Dminute)
}

function displayseconds(val) {

  Dseconds.innerText = val
  secondsele[0].appendChild(Dseconds)
}



displayhour('00');
displayminute('00');
displayseconds('00');



// create  a digital seconds clock
setInterval(() => {
  seconds += 1;

  // display seconds
  displayseconds(seconds);



  if (seconds == 60) {
    seconds = 0;
    if(seconds == 0){
      displayseconds('00');
    }else{
      displayseconds(seconds);

    }
    minute += 1;
    displayminute(minute);
  }

  if (minute == 60) {
    minute = 0;
    if(minute == 0){
      displayminute('00');
    }else{
      displayminute(minute);
    }
    hour += 1;
    if( hour == 13){
      hour = 1;
    }
    displayhour(hour);
  }
  

}, 1000);


// Date object in js

let date = {
  hour: 1,
}