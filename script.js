const rua = document.getElementById("rua")
const bairro = document.getElementById("bairro")
const uf = document.getElementById("uf")

async function getCep(){
    const cep = document.getElementById("cep").value
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = await response.json()
        console.log(data)

        rua.innerHTML = data.logradouro
        bairro.innerHTML = data.bairro
        uf.innerHTML = data.localidade
    } catch (error) {
        alert(error.message)
    }

}

async function getForecast(){
    const lat = document.getElementById("latitude").value
    const lon = document.getElementById("longitude").value
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m&timezone=America%2FSao_Paulo`)
        const data = await response.json()
        console.log(data)
        
        document.getElementById('forecast').innerHTML= ""
        document.getElementById('forecast').innerHTML +=  `<span>${data.current.temperature_2m}<span>`
        
    } catch (error) {
        alert(error)
    }

}
