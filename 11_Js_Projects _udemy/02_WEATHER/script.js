document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('city-input')
    const getWeatherBtn = document.getElementById('get-weather-btn')
    const weatherInfo = document.getElementById('weather-info')
    const cityNameDisplay = document.getElementById('city-name')
    const temperatureDisplay = document.getElementById('temperature')
    const descriptionDisplay = document.getElementById('description')
    const errorMessage = document.getElementById('error-message')

    const API_KEY = "a649dd2d2ff472cc22c44fa2b64fc24f" //env variable

    getWeatherBtn.addEventListener('click', async () => {
        const city = cityInput.value.trim()
        if(!city) return;

        //Two things to remember whenever we are making a call to somebody else's server 
            //whenever we are making any web request to any other  server , or to the database
                    ///1.)  the server may throw you some error 
                    //2.)server/database is always in another continent - this means it will take sometime , that means we have to wait for sometime , so to do that we use a keyword await . but we cant use await in any function we have to make that function async

                    //so whenever you are making any web request try to wrap it in try catch block
        
        try {
            const weatherData = await fetchWeatherData(city) 
            displayWeatherData(weatherData);

        } catch (error) {
            showError()
        }

    })
    async function fetchWeatherData(city){ //responsible for gets the data
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

        const response = await fetch(url); // feel free to name response as superman
        console.log(typeof response);
        console.log("RESPONSE",response);

        if(!response.ok){
            throw new Error( "City Not Found" )
        }

        const data = await response.json() // await because this also takes little bit of time , and whatever we have ini response we love to convert it into json so that its proper object and we can extract each of the data . we store it in a variable and then whole job is  transferred to  somebody who is returning this
        return data 
        
        //By above codes it has made the request and it has got he data  back 

        
        
    }
    

    function displayWeatherData(data){ //responsible for display mechanism .//we can call data as any name like weatherData, its just a placeholder
        console.log(data);

        const { name, main, weather } = data // we need to know the names precisely

        cityNameDisplay.textContent = name;
        temperatureDisplay.textContent = `Temperature : ${main.temp}`;
        descriptionDisplay.textContent = `Weather : ${weather[0].description}`;

        //Unlock the display
        weatherInfo.classList.remove('hidden')
        errorMessage.classList.add('hidden')
        
    }

    function showError(){ //when we call this method then , all it does is display error
        weatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden')
    }


})