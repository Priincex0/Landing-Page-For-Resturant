let foods = document.getElementById('food');
let food1s = document.getElementById('food1');
let fuds = document.getElementById('fud');

foods.addEventListener('click',()=>{
    fuds.style.backgroundImage="url('food.png')";
})
food1s.addEventListener('click',()=>{
    fuds.style.backgroundImage="url('food1.jpg')";
})