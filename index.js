//DOMContentLoaded Event
document.addEventListener("DOMContentLoaded", getAllCoins)

// console.log("Hello, World");
const Url = "https://api.coingecko.com/api/v3/exchange_rates"
const dataTable = document.getElementById("data")


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
    });
}