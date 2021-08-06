const inputRef = document.querySelector('#validation-input')
const inputRefLength = Number(inputRef.getAttribute('data-length'))

function checkInputLength (event){
    if(event.target.value.length === inputRefLength) {
        inputRef.classList.remove('invalid')
        inputRef.classList.add('valid')
        console.log(event.target)
    }
    if(event.target.value.length !== inputRefLength){
        inputRef.classList.remove('valid')
        inputRef.classList.add('invalid')
    }
    if(event.target.value.length === 0){
        inputRef.classList.remove('valid')
        inputRef.classList.remove('invalid')
    }
}

inputRef.addEventListener('blur', checkInputLength)