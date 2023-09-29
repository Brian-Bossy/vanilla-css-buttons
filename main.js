const button1 = document.getElementById('button1');
button1.addEventListener('click', function() {
  const result = confirm('my name is brian a software developer?');
  if (result) {
    const randomColor = getRandomColor();

    // Change the background color of the body
    document.body.style.backgroundColor = randomColor;
}
});

// Function to generate a random color
function getRandomColor() {
const letters = '0123456789ABCDEF';
let color = '#';
for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
}
return color;
  }


const button2 = document.getElementById('button2');
button2.addEventListener('click', function() {
    const result = confirm('my name is brian a software developer'); 
    if (result) {
        const randomColor = getRandomColor();
    
        // Change the background color of the body
        document.body.style.backgroundColor = randomColor;
    }
})

const button3 = document.getElementById('button3');
button3.addEventListener('click', function() {
    const result = confirm('my name is brian a software developer'); 
    if (result) {
        const randomColor = getRandomColor();
    
        // Change the background color of the body
        document.body.style.backgroundColor = randomColor;
    }
})

const button4 = document.getElementById('button4');
button4.addEventListener('click', function() {
    const result = confirm('my name is brian a software developer'); 
    if (result) {
        const randomColor = getRandomColor();
    
        // Change the background color of the body
        document.body.style.backgroundColor = randomColor;
    }
})