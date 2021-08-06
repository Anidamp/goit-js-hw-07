let totalValue = 0;
const incrementButtonRef = document.querySelector('[data-action="increment"]');
const decrementButtonRef = document.querySelector('[data-action="decrement"]');
const valueRef = document.querySelector('#value')

const increment = function () {
    totalValue += 1
    valueRef.textContent = totalValue;
};
incrementButtonRef.addEventListener('click', increment)

const decrement = function () {
    totalValue -= 1
    valueRef.textContent = totalValue;
};
decrementButtonRef.addEventListener('click', decrement)
