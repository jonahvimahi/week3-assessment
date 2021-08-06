const colorButton = document.querySelector('#color')
const placeButton = document.querySelector('#place')
const ritualButton = document.querySelector('#ritual')
const yesFriend = document.querySelector('#yesFriend')
const noFriend = document.querySelector('#noFriend')

function showColor(evt){
    
    alert('My favorite color is red. Maybe black or gray sometimes')
}

function showPlace(evt){
    alert('My favorite place is my home. But maybe like Hawaii or something')
}

function showRitual(evt){
    alert('My everyday ritual is standing in silence in the shower as soon as I get out of bed')
}

function newFriend(evt){
    alert('Yay hit me up on discord @jonerrr')
}

function noNewFriend(evt){
    alert('Yeah, I never liked you anyway')
}
colorButton.addEventListener('click', showColor)
placeButton.addEventListener('click', showPlace)
ritualButton.addEventListener('click', showRitual)
yesFriend.addEventListener('click', newFriend)
noFriend.addEventListener('click', noNewFriend)