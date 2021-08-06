const sizeControl = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text')

function textSizeChange (el){
    textRef.style.fontSize = `${el.target.value}px`
}

sizeControl.addEventListener('input', textSizeChange)