console.log("Hello, World");
const Url = "https://api.coinpaprika.com/v1/coins"
const dataTable = document.getElementById("data")


fetch(Url)
.then (res => res.json())
.then (data => displayData(data))

function displayData(data){
    console.log(data)
    const topTen = data.slice(0,10)
    console.log(topTen)
    const newRow = document.createElement("tr")
    console.log(data.forEach(data =>{
        dataTable.appendChild(newRow)
    }))}