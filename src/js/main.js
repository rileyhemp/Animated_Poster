let stripesContainer = document.querySelector('.stripes')
let horizontalLinesContainer = document.querySelector('.horizontal-lines')
let verticalLinesContainer = document.querySelector('.vertical-lines')


for (let i=0; i<19; i++) {
    let stripeOuter = document.createElement('div')
    let stripeInner = document.createElement('div')
    stripeOuter.classList.add(`stripe`, `stripe-${i}`)
    stripeOuter.appendChild(stripeInner)
    stripesContainer.appendChild(stripeOuter)
}

for (let i=0; i<15; i++) {
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