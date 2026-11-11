function getData()[
    let url = 'http://localhost:6001/get-data'
    let response = fetch(url)
    let json = response.json()
console.log(response.json())

async function get Data(){
    let response = await fetch(url)
let json = await response.json()
console.log(json)
}


getData()
    