
const colors = ['red', 'blue', 'green', 'purple', 'orange'];
let index = 0;

function changeColor() {
    document.getElementById('text').style.color = colors[index];
    index = (index + 1) % colors.length;
}

setInterval(changeColor, 1000);
