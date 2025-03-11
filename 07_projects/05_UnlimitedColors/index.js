// generate a random color

// const randomColor = function(){
//   const hex = '0123456789ABCDEF';
//   let color = '#';
//   for(let i = 0; i < 6; i ++){
//     color += hex[Math.floor(Math.random() * 10)];

//   }
//   return color;
// }
// let intervalId;
// const startChangingColor = function(){
//   intervalId = setInterval(changeBgColor,1000)

//   function changeBgColor(){
//     document.body.style.backgroundColor = randomColor();
//   }
// };

// const stopChangingColor = function(){
//   clearInterval(intervalId)
// }
// document.querySelector('#start').addEventListener('click', startChangingColor)

// document.querySelector('#stop').addEventListener('click', stopChangingColor)



//more professionalism code


const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
      color += hex[Math.floor(Math.random() * 10)];
  
    }
    return color;
  }
  let intervalId;
  const startChangingColor = function(){
    if(!intervalId){
      intervalId = setInterval(changeBgColor,1000)
    }
  
    function changeBgColor(){
      document.body.style.backgroundColor = randomColor();
    }
  };
  
  const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null // interval id ko flush kar do , means jaise hi interval id ka kaam ho gya hai usko clear to kar hi diya hai ab iss variable ko derefernce kar diya hai
  }
  document.querySelector('#start').addEventListener('click', startChangingColor)
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor)
  
  
  