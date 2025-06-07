const cursor = document.querySelector('.cursor')

const colors = [
    '#FF6633',
    '#FFB399',
    '#FF33FF',
    '#FFFF99',
    '#00B3E6',
    '#E6B333',
    '#3366E6',
    '#999966',
    '#99FF99',
    '#B34D4D',
];

//Add circle to cursor and change ,it's color as cursor
//moves on the screen. Pick color from these array

document.addEventListener('mousemove', function (event){
    moveCursor(event.pageX, event.pageY);
})

const moveCursor = function(pageX, pageY){
    cursor.style.left = pageX + 'px';
    cursor.style.top = pageY + 'px'

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    cursor.style.backgroundColor = randomColor

}