const forms = document.querySelector('form')
//whenever form get submit , it submit the form either by get type or post type. but whenever it gets submit its value is sent to url or server, we have to prevent here because we are not sending this to the server now, so whatever is the defualt action of form , stop that so we get a methods in event

// const height = parseInt(document.querySelector('#height').value) // this useCase will give you empty value
forms.addEventListener('submit', function(chai){
  chai.preventDefault() // stop defualt action ,dont submit now
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
  }else if (weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please Give a valid Weight ${weight}`;
  }
  else {
    const BMI = (weight / ((weight * height) / 1000)).toFixed(2);  // toFixed() is method because we want results upto 2 decimal places only

    //show the results
    results.innerHTML = `<span>${BMI}</span>`
  }
});