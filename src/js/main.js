let stripesContainer = document.querySelector('.stripes')
let horizontalLinesContainer = document.querySelector('.horizontal-lines')
let verticalLinesContainer = document.querySelector('.vertical-lines')
let comet = document.querySelector('.comet')

comet.addEventListener('animationiteration', function(){
    let random = Math.random() * 30
    comet.style["animation-duration"] = random + 's'
})

for (let i=0; i<19; i++) {
    let stripeOuter = document.createElement('div')
    let stripeInner = document.createElement('div')
    stripeOuter.classList.add(`stripe`, `stripe-${i}`)
    stripeOuter.appendChild(stripeInner)
    stripesContainer.appendChild(stripeOuter)
}

for (let i=0; i<26; i++) {
    let lineOuter = document.createElement('div')
    let lineInner = document.createElement('div')
                        

    
    lineOuter.classList.add(`h-line`, `h-line-${i}`)
    lineOuter.appendChild(lineInner)
    horizontalLinesContainer.appendChild(lineOuter)
}

for (let i=0; i<8; i++) {
    let lineOuter = document.createElement('div')
    let lineInner = document.createElement('div')
    lineOuter.classList.add(`v-line`, `v-line-${i}`)
    lineOuter.appendChild(lineInner)
    verticalLinesContainer.appendChild(lineOuter)
}

//Changes color when you click on the sun
let index1 = 0
let index2 = 0
let sunClickable = document.querySelector('.sun-clickable')
sunClickable.addEventListener('click', function(){
    let sun = document.querySelector('.sun')
    let gradient1 = document.querySelector('.back-gradient-down')
    let gradient2 = document.querySelector('.front-gradient-down')
    let gradient3 = document.querySelector('.front-gradient-up')
    let horizontalLines = document.querySelector('.horizontal-lines')
    let verticalLines = document.querySelector('.vertical-lines')
    let car = document.querySelector('.car')
    let hues1 = [0, 45, 90, 135, 180, 225, 270, 315]
    let hues2 = [0, 90, 180, 270]
    if ( index2 < hues2.length-1 ) {
        index2++
    } else {
        index2 = 0
    }
    if ( index1 < hues1.length-1 ) {
        index1++
    } else {
        index1 = 0
    }
    sun.style.filter = `hue-rotate(${hues2[index2]}deg)`
    gradient1.style.filter = `hue-rotate(${hues1[index1]}deg)`
    gradient2.style.filter = `hue-rotate(${hues1[index1]}deg)`
    gradient3.style.filter = `hue-rotate(${hues1[index1]}deg)`
    horizontalLines.style.filter = `hue-rotate(${hues1[index1]}deg)`
    verticalLines.style.filter = `hue-rotate(${hues1[index1]}deg)`
    car.style.filter = `hue-rotate(${hues1[index1]}deg)`
})

//Lights up the Chrysler building 
let building = document.querySelector('.city-building-clickable')
let buildingIsLit = false
building.addEventListener('click', function(){
    let chryslerBuilding = document.querySelector('.city-building') 
    if ( !buildingIsLit ) {
        buildingIsLit = true
        chryslerBuilding.style.filter = "brightness(1)"
    } else {
        buildingIsLit = false
        chryslerBuilding.style.filter = "brightness(0)"
    }
})

//Makes the road go faster 
let index3 = 0
let grid = document.querySelector('.grid-clickable')
grid.addEventListener('click', function(){
    console.log('clicked')
    let lines = document.querySelector('.horizontal-lines')
    let speed = [.8, .5, .3, .1, .075]    
    if ( index3 < speed.length-1 ) {
        index3++
        //Waits for the end of animation to speed up. 
        lines.addEventListener('animationiteration', function(){lines.style.animationDuration = speed[index3] + "s"})
    } else {
        index3 = 0
        lines.addEventListener('animationiteration', function(){lines.style.animationDuration = speed[index3] + "s"})
    }
})

let lights = document.querySelectorAll ('.light')

console.log(lights)

for (let i=0; i<lights.length; i++) {
    lights[i].addEventListener('click', function(){
        if ( this.classList.contains('main-headlights') ) {
            this.classList.toggle('light-off')
            if ( this.classList.contains('light1') ) {
                document.querySelector('.headlight-left').classList.toggle('hidden')
            } else if ( this.classList.contains('light2') ) {
                document.querySelector('.headlight-right').classList.toggle('hidden')
            } else return
        } else {
            this.classList.toggle('blinkers')
            if ( this.classList.contains('left-blinker') ) {
                document.querySelector('.right-blinker').classList.remove('blinkers')
            } else {
                document.querySelector('.left-blinker').classList.remove('blinkers')
            }
        }
    })
}


let logo = document.querySelector('.logo-clickable')
logo.addEventListener('click', function(){
    console.log('hi')
    let allDivs = document.querySelectorAll('.main')
    for ( let i=0; i<allDivs.length; i++ ) {
        allDivs[i].classList.toggle('desaturated')
    }
})