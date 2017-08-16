var i = 0
var images = ['img/chicago.jpg', 'img/ny.jpg', 'img/la.jpg']
var picture = document.getElementById("picture")
var slideInterval = setInterval(right, 7000)

function changeDot(n){
    if(i == 0){
        document.getElementById("1").innerHTML = '&#11044;'
        document.getElementById("2").innerHTML = '&#9711;'
        document.getElementById("3").innerHTML = '&#9711;'    
    }
    if(i == 1){
        document.getElementById("1").innerHTML = '&#9711;'
        document.getElementById("2").innerHTML = '&#11044;'
        document.getElementById("3").innerHTML = '&#9711;'    
    }
    if(i == 2){
        document.getElementById("1").innerHTML = '&#9711;'
        document.getElementById("2").innerHTML = '&#9711;'
        document.getElementById("3").innerHTML = '&#11044;'    
    }
}

function currentSlide(n){
    picture.src = images[n]
    i = n
    changeDot(i)
}

function switchImage(direction){
    if (direction === 'left'){
        if (i == 0){
            i = images.length - 1
            picture.src = images[i]
        }
        else
            picture.src = images[--i]
        changeDot(i)
    }

    if (direction === 'right'){
        if (i == images.length-1){
            i = 0
            picture.src = images[i]
        }
        else
    	   picture.src = images[++i]
        changeDot(i)
    }
}

function left(){
    switchImage('left')
}

function right(){
    switchImage('right')
}

//Event Listeners
document.getElementById("left").addEventListener("click", left);
document.getElementById("right").addEventListener("click", right);