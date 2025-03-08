const clocks = document.getElementById('clock')
// document.querySelector('#clock')


// let date = new Date()
// console.log(date.toLocaleTimeString()); this is just for showing time for single time , in this way the time is only updated when the page is reloaded
 //setInterval method of javascript , this method takes a method and a interval  so that that method runs continuously after the given interval of time 
 setInterval(function(){
  let date = new Date();
  clocks.innerHTML = date.toLocaleTimeString();
 }, 1000) 
 //syntax of setInterval method setInterval(function(){} , 1000) //1000 for 1ms, 2000 for 2ms