// Service Worker - Inicio
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./js/sw.js')
        .then(function () {
            console.log("Service Worker registered successfully");
        })
        .catch(function () {
            console.log("Service worker registration failed")
        });
}

// Service Worker -Fim


let botao = document.getElementById("botao")
let seletorTop  = document.getElementById("select-moedas-01")
let seletorDown = document.getElementById("select-moedas-02")

//Captura para autalizar e exibir cotação do Dolar e Euro Hoje
let cotacao = document.getElementById("DolarEuroHoje")
converterMoedas()


// funçao assincrona, espera respota do fetch
async function converterMoedas() {

    // API moedas https://docs.awesomeapi.com.br/api-de-moedas
    // await esperar reposta do servidor externo
    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,EUR-USD,USD-EUR,BRL-USD,BRL-EUR").then( function(resposta){
       return resposta.json() // assim que o servidor retorna respota, executa a função retornando json
    })

    // Valor do dia bitcoin
    let bitcoin = await fetch("https://www.mercadobitcoin.net/api/BTC/ticker/").then( function(resposta1){
       return resposta1.json() // assim que o servidor retorna respota, executa a função retornando json
    })
    
    // Atribuindo valores API Json para variaveis
    let dolar_real = moedas.USDBRL.high
    let dolar_euro = moedas.USDEUR.high
    let euro_real  = moedas.EURBRL.high
    let euro_dolar = moedas.EURUSD.high
    let real_dolar = moedas.BRLUSD.high
    let real_euro  = moedas.BRLEUR.high

    let bitcoin_real =bitcoin.ticker.last
    let bitcoin_input = Number(bitcoin_real.replace(".",""))
    console.log(bitcoin_real)
    console.log(bitcoin_input)
    console.log(moedas)
    

    let inputValor = Number(document.getElementById("input-valor").value)
    let textoMoeda01 = document.getElementById("texto-moeda-01")
    let textoMoeda02 = document.getElementById("texto-moeda-02")
    //let textoReal = document.getElementById("texto-real")
    
    //Autaliza  e exibe cotação do Dolar e Euro da data atual
    let cotacaoDolar =  1 * dolar_real
    let cotacaoEuro = 1 * euro_real
    let cotacaoBitcoin = 1 * bitcoin_real
    cotacao.innerHTML = "Dolar Hoje: " + cotacaoDolar.toLocaleString("en-US",{style: "currency", currency:"BRL"}).bold() + " | Euro Hoje: " + cotacaoEuro.toLocaleString("en-US",{style: "currency", currency:"BRL"}).bold() + " | Bitcoin: " + cotacaoBitcoin.toLocaleString("en-US",{style: "currency", currency:"BRL"}).bold()
        


    if (seletorTop.value === "Dolar" && seletorDown.value =="Real"){
        valorEmDolares = inputValor * dolar_real
        textoMoeda01.innerHTML = inputValor.toLocaleString("pt-br",{style: "currency", currency:"USD"}).bold()
        textoMoeda02.innerHTML = valorEmDolares.toLocaleString("en-US",{style: "currency", currency:"BRL"}).bold()
        

    }

    if (seletorTop.value === "Dolar" && seletorDown.value =="Euro"){
        valorEmDolares = inputValor * dolar_euro
        textoMoeda01.innerHTML = inputValor.toLocaleString("pt-br",{style: "currency", currency:"USD"}).bold()
        textoMoeda02.innerHTML = valorEmDolares.toLocaleString("de-DE",{style: "currency", currency:"EUR"}).bold()
        

    }

    if (seletorTop.value === "Euro" && seletorDown.value =="Dolar"){
        valorEmDolares = inputValor * euro_dolar
        textoMoeda02.innerHTML = valorEmDolares.toLocaleString("de-DE",{style: "currency", currency:"EUR"}).bold()
        textoMoeda01.innerHTML = inputValor.toLocaleString("en-US",{style: "currency", currency:"BRL"}).bold()
        

    }

    if (seletorTop.value === "Euro" && seletorDown.value =="Real"){
        valorEmDolares = inputValor * euro_real
        textoMoeda01.innerHTML = inputValor.toLocaleString("de-DE",{style: "currency", currency:"EUR"}).bold()
        textoMoeda02.innerHTML = valorEmDolares.toLocaleString("en-US",{style: "currency", currency:"BRL"}).bold()
        

    }

    if (seletorTop.value === "Real" && seletorDown.value =="Dolar"){
        valorEmDolares = inputValor * real_dolar
        textoMoeda01.innerHTML = inputValor.toLocaleString("en-US",{style: "currency", currency:"BRL"}).bold()
        textoMoeda02.innerHTML = valorEmDolares.toLocaleString("pt-br",{style: "currency", currency:"USD"}).bold()
        

    }

    if (seletorTop.value === "Real" && seletorDown.value =="Euro"){
        valorEmDolares = inputValor * real_euro
        textoMoeda01.innerHTML = inputValor.toLocaleString("en-US",{style: "currency", currency:"BRL"}).bold()
        textoMoeda02.innerHTML = valorEmDolares.toLocaleString("de-DE",{style: "currency", currency:"EUR"}).bold()
        

    }

    
    
     
}

//Funçao troca bandeira e moeda
function trocaDeMoeda(){
    let textoNomeMoeda01 = document.getElementById("texto-nome-moeda-01")
    let textoNomeMoeda02 = document.getElementById("texto-nome-moeda-02")
    let bandeiraMoeda01 = document.getElementById("bandeira-moeda-01")
    let bandeiraMoeda02 = document.getElementById("bandeira-moeda-02")
    
    if(seletorTop.value === "Dolar"){
        console.log("Dolar selecionado")
        textoNomeMoeda01.innerHTML = "Dolar americano"
        bandeiraMoeda01.src = "./img/eua.png"
        
    }
    
    if(seletorTop.value === "Euro"){
        console.log("Euro selecionado")
        textoNomeMoeda01.innerHTML = "Euro"
        bandeiraMoeda01.src = "./img/euro.png"
    }

    if(seletorTop.value === "Real"){
        console.log("Euro selecionado")
        textoNomeMoeda01.innerHTML = "R$ Real brasileiro"
        bandeiraMoeda01.src = "./img/br.png"
    }

    if(seletorDown.value === "Dolar"){
        console.log("Dolar selecionado")
        textoNomeMoeda02.innerHTML = "Dolar americano"
        bandeiraMoeda02.src = "./img/eua.png"
        
    }
    
    if(seletorDown.value === "Euro"){
        console.log("Euro selecionado")
        textoNomeMoeda02.innerHTML = "Euro"
        bandeiraMoeda02.src = "./img/euro.png"
    }

    if(seletorDown.value === "Real"){
        console.log("Euro selecionado")
        textoNomeMoeda02.innerHTML = "R$ Real brasileiro"
        bandeiraMoeda02.src = "./img/br.png"
    }

    

    converterMoedas()
}

botao.addEventListener("click",converterMoedas)
seletorTop.addEventListener("change",trocaDeMoeda)
seletorDown.addEventListener("change",trocaDeMoeda)



/* Notação
+Formatação Dolar
console.log(valorEmDolares.toLocaleString('en-US',{style: 'currency', currency:'USD'}))

+Formatação Reais 
console.log(valorEmDolares.toLocaleString('pt-br',{style: 'currency', currency:'BRL'}))

*/
