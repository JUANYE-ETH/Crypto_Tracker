//DOMContentLoaded Event
document.addEventListener("DOMContentLoaded", getAllCoins)

// console.log("Hello, World");
const Url = "https://api.coingecko.com/api/v3/exchange_rates"


function getAllCoins() {
    fetch(Url)
        .then((res) => res.json())
        .then((data) => displayData(data.rates))
}


function displayData(coinsObj) {
    const coinsArr = [];

    for (const key in coinsObj) {
        coinsArr.push(coinsObj[key])
    }

    coinsArr.slice(0, 12).forEach(coin => {
        const name = coin.name;
        const newRow = document.createElement("tr");
        
        const newCellName = document.createElement("td");
        newCellName.textContent = coin.name;

        const newCellType = document.createElement("td");
        newCellType.textContent = coin.type;

        const newCellUnit = document.createElement("td");
        newCellUnit.textContent = coin.unit;

        const newCellValue = document.createElement("td");
        newCellValue.textContent = Math.round(coin.value);
        
        newRow.append(newCellName, newCellType, newCellUnit, newCellValue);
        document.getElementById('data').append(newRow)

        newCellName.addEventListener('click', () => {
            const coinsName = document.getElementById("coins-name")
            const coinsType = document.getElementById("coins-type")
            const coinsUnit = document.getElementById("coins-unit")
            const coinsValue = document.getElementById("coins-value")

            coinsName.textContent = coin.name
            coinsType.textContent = coin.type
            coinsUnit.textContent = coin.unit
            coinsValue.textContent = coin.value
        })
    });
}