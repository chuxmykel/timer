var second = 0;
var minute = 0;
var hour = 0;
var interval;

//a function to update the timer every 1000ms (1s)
function pulse(){
  interval = setInterval(updateTimer, 100);
}

//This function increments the second var by 1 each time it's called but resets
//to 0 and increments the minute by 1 if the second is 60
function updateSecond(){
  if(second > 58){
    second = -1;
    updateMinute();
  }
  second++;
}
//This function increments the minute var by 1 each time it's called but resets
//to 0 and increments the hour by 1 if the minute is 60
function updateMinute(){
  if(minute > 58){
    minute = -1;
    updateHour();
  }
  minute++;
}

//This function increments the hour variable by 1 each time it's called.
function updateHour(){
  hour++;
}

//This function updates the timer on the browser screen
function updateTimer(){
  if(second < 10){
    document.getElementById('Seconds').innerHTML = '0' + second;
  }else{
    document.getElementById('Seconds').innerHTML = '' + second;
  }

  if(minute < 10){
    document.getElementById('Minutes').innerHTML = '0' + minute;
  }else{
    document.getElementById('Minutes').innerHTML = '' + minute;
  }
  document.getElementById('Hours').innerHTML = ''+hour;
  updateSecond();
}

//function to start the timer
function start(){
  clearInterval(interval);
  pulse();
}

//function to stop the timer
function stop(){
  clearInterval(interval);
  second = 0;
  minute = 0;
  hour = 0;
}

//function to pause the timer
function pause(){
  clearInterval(interval);
}
