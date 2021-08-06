const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output')

function changeOutput (event){
    if(event.target.value.trim()){
        outputEl.textContent = event.target.value
    } else {
        outputEl.textContent = 'незнакомец'
    }

}

inputEl.addEventListener('input', changeOutput)