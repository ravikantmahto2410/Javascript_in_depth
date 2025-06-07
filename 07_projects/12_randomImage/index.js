const pageContent = document.querySelector('.content')
const baseURL = 'https://source.unsplash.com/all/';

const rows = 7;

for(let i = 0; i < rows * 3; i++){
    const image = document.createElement('img');
    image.src = `${baseURL}${randomSize()}`
    pageContent.appendChild(img)
}

function randomSize(){
    return `${randomNumber()} ${randomNumber}`;
}

function randomNumber(){
    return Math.floor(Math.random() * 10) + 300
}