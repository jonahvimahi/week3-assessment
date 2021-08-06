const restauratArray = [
    'Wendys' , 'Little Caesars' , 'Dominoes' , 'Subway'
]
const clickRestaurant = document.querySelector('#restaurant')
const randomRestaurant = Math.floor(Math.random() * restauratArray.length)

function newResaurant(evt){
        
        newBody = document.querySelector('body');
        newP = document.createElement('p');
        newP.restauratArray = randomRestaurant[random]
        document.querySelector('body').appendChild(newP)
    }
    // newP.textContent = res.data.at(-1);
clickRestaurant.addEventListener('click', newResaurant)