console.log("Hello, World");

document.addEventListener('DOMContentLoaded', () => {
    fetch ('https://api.coinpaprika.com/v1/coins')
    .then(res => res.json())
    .then(arrCoinObj => console.log(arrCoinObj))//renderAllCoins(arrCoinObj))
    
});

function renderAllCoins(arrCoinObj) {
    arrCoinObj.forEach(coinObj => renderOneCoin(coinObj))
}

function renderOneCoin(coinObj){

}