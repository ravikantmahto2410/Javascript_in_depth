const headerContent = document.querySelector('.header-content')
const buttonClass = document.querySelector('.btn')
const container = document.querySelector('.container')

const imagetag = document.createElement('IMG')
buttonClass.addEventListener('click', async function(e){
    try {
        const dataStored = await getImages();
        displayImage(dataStored)
    } catch (error) {
        console.log("Something went wrong", error)
    }
})

async function getImages(){
    const url = 'https://api.thecatapi.com/v1/images/search';

    const response = await fetch(url)
    const data = await response.json();
    return data
}

function displayImage(dataStored){
    console.log(dataStored)
    dataStored.forEach((e) => {
        imagetag.setAttribute("src",e.url)
        imagetag.setAttribute("width", e.width)
        imagetag.setAttribute('height',e.height)
        imagetag.setAttribute('alt',e.id)
        container.appendChild(imagetag)
    })
    

}