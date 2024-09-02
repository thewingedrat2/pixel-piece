//variables
    //map var
    var map = document.getElementById("pirateisland")
    //bandit var
    var bandit = document.getElementById("bandit")

    var banditsPositionL = 450
    var banditsPositionT = 200

    //char var
    var char = document.getElementById("char")
    var charPirateSpawnPointX = 785
    var charPirateSpawnPointY = 325
    //health var

    var healthbar
    var hp 

//map


//D = 68 , A = 65 , W = 87 , S = 83
//movement

let charmovingright
let charmovingleft
let charmovingtop
let charmovingbottom

let idle

let keyright = true
let keyleft = true
let keytop = true
let keybottom = true

let x = char.offsetLeft
let y = char.offsetTop

let remmovingright
let remmovingleft
let remmovingtop
let remmovingbottom


window.addEventListener("load", function(){
    idle = true
    setInterval(idlekey, 200)
})


function idlekey(){
    if(idle === true){
        char.classList.add("charIdleAnimation")
    } else{
        char.classList.remove("charIdleAnimation")
    }

    document.addEventListener("keydown", function(event){
        if(event.keyCode == 68 || event.keyCode == 65 || event.keyCode == 87 || event.keyCode == 83){
            idle = false
        }
    })
    document.addEventListener("keyup", function(event){
        if(event.keyCode == 68 || event.keyCode == 65 || event.keyCode == 87 || event.keyCode == 83){
            idle = true
        }
    })
}

document.addEventListener("keydown", function(event){
    if(event.keyCode == 68){
        if(keyright === true){
            remmovingright = setInterval(movingright, 16)
            keyright = false
            char.classList.add("charWalkingRightAnimation")
            
        }
    }

    if(event.keyCode == 65){
        if(keyleft === true){
            remmovingleft = setInterval(movingleft, 16)
            keyleft = false
            char.classList.add("charWalkingLeftAnimation")
        }
    }
    if(event.keyCode == 87){
        if(keytop === true){
            remmovingtop = setInterval(movingtop, 16)
            keytop = false
            char.classList.add("charWalkingTopAnimation")
        }
    }

    if(event.keyCode == 83){
        if(keybottom === true){
            remmovingbottom = setInterval(movingbottom, 16)
            keybottom = false
            char.classList.add("charWalkingBottomAnimation")
        }
    }
})


document.addEventListener("keyup", function(event){
    if(event.keyCode == 68){
        clearInterval(remmovingright)
        char.classList.remove("charWalkingRightAnimation")
        keyright = true
    }
    if(event.keyCode == 65){
        clearInterval(remmovingleft)
        keyleft = true
        char.classList.remove("charWalkingLeftAnimation")
    }
    if(event.keyCode == 87){
        clearInterval(remmovingtop)
        keytop = true
        char.classList.remove("charWalkingTopAnimation")
    }
    if(event.keyCode == 83){
        clearInterval(remmovingbottom)
        keybottom = true
        char.classList.remove("charWalkingBottomAnimation")
    }
})

function movingright(){
    x++
    char.style.left = x + "px"
    console.log(char.style.left)
}

function movingleft(){
    x--
    char.style.left = x + "px"
    console.log(char.style.left)
}

function movingtop(){
    y--
    char.style.top = y + "px"
    console.log(char.style.top)
}

function movingbottom(){
    y++
    char.style.top = y + "px"
    console.log(char.style.top)
}






//bandit


window.addEventListener("load", function(){
    setInterval(banditdetection, 25)
})


function banditdetection(){
    if(bandit.offsetLeft <= char.offsetLeft && char.offsetLeft < bandit.offsetLeft + 100 && bandit.offsetTop <= char.offsetTop && char.offsetTop < bandit.offsetTop + 100 || char.offsetLeft <= bandit.offsetLeft && bandit.offsetLeft < char.offsetLeft + 100 && char.offsetTop <= bandit.offsetTop && bandit.offsetTop < char.offsetTop + 100 ||bandit.offsetLeft <= char.offsetLeft && char.offsetLeft < bandit.offsetLeft + 100 && bandit.offsetTop >= char.offsetTop && char.offsetTop <= bandit.offsetTop + 100 || char.offsetLeft <= bandit.offsetLeft && char.offsetLeft > bandit.offsetLeft - 100 && bandit.offsetTop <= char.offsetTop && char.offsetTop < bandit.offsetTop + 100 ){
        console.log("Bandit detected you")
        if(bandit.offsetLeft <= char.offsetLeft && bandit.offsetTop <= char.offsetTop){
          
            let banditx = bandit.offsetLeft
            let bandity = bandit.offsetTop


            if(bandit.offsetLeft != char.offsetLeft - 20){
                bandit.style.left = banditx + 1 + "px"
            }
            if(bandit.offsetTop != char.offsetTop - 20){
                bandit.style.top = bandity + 1 + "px"
            }
                
        }
        if(bandit.offsetLeft <= char.offsetLeft && bandit.offsetTop >= char.offsetTop){
            let banditx = bandit.offsetLeft
            let bandity = bandit.offsetTop


            if(bandit.offsetLeft != char.offsetLeft - 20){
                bandit.style.left = banditx + 1 + "px"
            }
            if(bandit.offsetTop != char.offsetTop - 20){
                bandit.style.top = bandity - 1 + "px"
            }
        }

        if(bandit.offsetLeft >= char.offsetLeft && bandit.offsetTop >= char.offsetTop){
            let banditx = bandit.offsetLeft
            let bandity = bandit.offsetTop


            if(bandit.offsetLeft != char.offsetLeft - 20){
                bandit.style.left = banditx - 1 + "px"
            }
            if(bandit.offsetTop != char.offsetTop - 20){
                bandit.style.top = bandity - 1 + "px"
            }
        }
        if(bandit.offsetLeft >= char.offsetLeft && bandit.offsetTop <= char.offsetTop){
            let banditx = bandit.offsetLeft
            let bandity = bandit.offsetTop


            if(bandit.offsetLeft != char.offsetLeft - 20){
                bandit.style.left = banditx - 1 + "px"
            }
            if(bandit.offsetTop != char.offsetTop - 20){
                bandit.style.top = bandity + 1 + "px"
            }
        }
        
        
    }
    
}

//bandit attack system

    window.addEventListener("load",function(){
        setInterval(banditattack, 100)
    })
    let banditPunchDelay = false
    function banditattack(){

        
        //first one is for top left from bandit - second one is for bottom left for bandit - third one is for top right for bandit - fourth one is for bottom right for bandit
        if(char.offsetLeft <= bandit.offsetLeft && char.offsetLeft >= bandit.offsetLeft - 35 && char.offsetTop <= bandit.offsetTop && char.offsetTop >= bandit.offsetTop - 35 || bandit.offsetLeft >= char.offsetLeft && bandit.offsetLeft <= char.offsetLeft + 35 && bandit.offsetTop <= char.offsetTop && bandit.offsetTop >= char.offsetTop - 35 || char.offsetLeft >= bandit.offsetLeft && bandit.offsetLeft >= char.offsetLeft - 35 && char.offsetTop <= bandit.offsetTop && bandit.offsetTop <= char.offsetTop + 35 || char.offsetLeft >= bandit.offsetLeft && bandit.offsetLeft >= char.offsetLeft - 35 && char.offsetTop >= bandit.offsetTop && bandit.offsetTop > char.offsetTop - 35){
            
            if(hp != 0 && banditPunchDelay === false){
                healthbar = healthbar - 10
                hp = hp - 10
                if(hp === 10){
                    document.getElementById("health").style.color = "black"
                }
                document.getElementById("health").innerHTML = hp
                document.getElementById("greenbar").style.width = healthbar + "%"
                console.log("you are being hit by a bandit")
                banditPunchDelay = true
                setTimeout(removebanditpunchdelay, 1500)
            }
            if(hp === 0 ){
                bandit.style.top = banditsPositionT + "px"
                bandit.style.left = banditsPositionL + "px"
                document.getElementById("health").style.color = "white"
                hp = 100
                healthbar = 100

                x = charPirateSpawnPointX
                y = charPirateSpawnPointY
                console.log(x)
                console.log(y)
                document.getElementById("health").innerHTML = hp
                document.getElementById("greenbar").style.width = healthbar + "%"


                char.style.left = charPirateSpawnPointX + "px"
                char.style.top = charPirateSpawnPointY + "px"
            }

        }
    }

    function removebanditpunchdelay(){
        banditPunchDelay = false
    }

//collision detection

var collision1 = document.getElementById("collision1")
var collision2 = document.getElementById("collision2")
var collision3 = document.getElementById("collision3")

window.addEventListener("load", function(){
    console.log("collisions loaded")
    setInterval(collisiondetect, 16)
})

function collisiondetect(){
    if(collision1.offsetLeft + 10 >= char.offsetLeft && collision1.offsetLeft <= char.offsetLeft + 20 && collision1.offsetTop + 300 >= char.offsetTop && collision1.offsetTop <= char.offsetTop + 30){
        
        clearInterval(remmovingleft)
    }
    if(collision2.offsetLeft + 550 >= char.offsetLeft && collision2.offsetLeft <= char.offsetLeft + 20 && collision2.offsetTop + 10 >= char.offsetTop && collision2.offsetTop <= char.offsetTop + 30){
        clearInterval(remmovingbottom)
    }
    if(collision3.offsetLeft + 300 >= char.offsetLeft && collision3.offsetLeft <= char.offsetLeft + 20   && collision3.offsetTop + 10 >= char.offsetTop && collision3.offsetTop <= char.offsetTop + 30){
        clearInterval(remmovingtop)

    }
}


//health system


window.addEventListener("load", function(){
    healthbar = 100
    hp = 100
    document.getElementById("health").innerHTML = hp
    document.getElementById("greenbar").style.width = healthbar + "%"
})



//char attack system





/*window.addEventListener("click", function(event){
    var cursorX = event.clientX
    var cursorY = event.clientY

    console.log(cursorX)
    console.log(cursorY)
})*/

