const displayJoke = document.querySelector('#display-joke')
const getJoke = document.querySelector('#getJoke')
const p = document.createElement('p')
const container = document.querySelector('.container')
getJoke.addEventListener('click', async function(e) {
    try {
        const jokeValue = await fetchJoke()
        showJoke(jokeValue)
    } catch (error) {
        console.log("Something went wrong", error)
    }

})

async function fetchJoke(){
    const url = 'https://api.chucknorris.io/jokes/random';

    const response = await fetch(url);
    
    const data = await response.json()
    return data
}

function showJoke(data){
    console.log(data);
    
    console.log(typeof data.categories)
    p.textContent = `joke : ${data.value}`
    
    container.appendChild(p)

}