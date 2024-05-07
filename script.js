let key = "cebcd482eda57fa9a6714c1c2ba91885"


async function buscarcidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric",).then(resposta => resposta.json())
    console.log(dados)
    tela(dados)
}

function clicarnobotao() {
    let cidade = document.querySelector(".cidade").value

    buscarcidade(cidade)

}

function tela(dados) {
    document.querySelector(".tempo").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector('.icone').src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".Humidade").innerHTML = "Humidade: " + dados.main.humidity + "%"
      
}


        
       





























        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
