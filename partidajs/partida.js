
const url = "https://api.api-futebol.com.br/v1/campeonatos/10"

let headers = new Headers();

headers.append('Athorization', 'Bearer test_6ed08d31465ad97311bacd734d8099')
console.log(headers);

const options = {
headers: {'Authorization' : 'Bearer test_6ed08d31465ad97311bacd734d8099'},
}

function buscarPartidas() {
    fetch(url, options)
   .then(resposta => {
     resposta.json()
      .then(obj => {
      mostrarPartidas(obj);
    })
  })
  .catch()
  }
  
  
  
  function mostrarPartidas(campeonatos) {
    console.log(campeonatos, "Isso é partidas para mobile")
  
  
  
    var image = document.createElement('img');
     image.setAttribute('src', campeonatos.logo)
     image.style.width='200px'
     image.style.marginLeft='-70%'
     image.style.height='200px'

  
    var nome  = document.createElement('h2');
    nome.innerText = campeonatos.edicao_atual.nome_popular
    nome.style.marginTop='-150px'
    nome.style.fontSize='50px'
    nome.style.marginLeft='25%'
    nome.style.color='black'
  
  
  
  
      document.getElementById('partidasAoVivo').append(image,nome);
    }
  
  document.write(buscarPartidas());
  
  ////////////////////////////LOGO DO CAMPEONATO//////////////////////////////




  const urltab = "https://api.api-futebol.com.br/v1/campeonatos/10/tabela"


function buscarPartidas2() {
  fetch(urltab, options)
 .then(resposta => {
   resposta.json()
    .then(obj => {
    mostrarPartidas2(obj);
  })
})
.catch()
}

function mostrarPartidas2(tabela) {
  console.log(tabela, "Isso é partidas para pc")

 for (i=0; i<tabela.length; i++){


  var ano  = document.createElement('h3');
  ano.style.marginLeft='-80%'


  var logo =  document.createElement('img');
  logo.setAttribute('src', tabela[i].time.escudo)
  logo.style.width='40px'
  logo.style.height='50px'
  logo.style.marginTop='10px'
  logo.style.marginLeft='-75%'


  var posicao = document.createElement('h3');
  posicao.innerText = tabela[i].posicao
  posicao.style.marginTop='-50px'
  posicao.style.marginLeft='-90%'
  posicao.style.color='white'
  posicao.style.backgroundColor='brown'

  var nomelogo = document.createElement('h5')
  nomelogo.innerText = tabela[i].time.nome_popular
  nomelogo.style.backgroundColor='red'
  nomelogo.style.marginTop='-15px'
  nomelogo.style.marginLeft='-50%'
  nomelogo.style.color='teal'


  var ponto = document.createElement('h4')
  ponto.innerText=tabela[i].pontos
  ponto.style.backgroundColor='brown'
  ponto.style.marginTop='-25px'
  ponto.style.marginLeft='-15%'
  ponto.style.color='white'

  var vit = document.createElement('h4');
  vit.innerText=tabela[i].vitorias
  vit.style.marginTop='-60px'
  vit.style.marginLeft='39%'
  vit.style.color='white'
  vit.style.backgroundColor='brown'
  vit.style.width = '30px'


  var empate = document.createElement('h4')
  empate.innerText=tabela[i].empates
  empate.style.marginTop='-60px'
  empate.style.marginLeft='46%'
  empate.style.color='white'
  empate.style.backgroundColor='brown'
  empate.style.width = '30px'


  var derrota =  document.createElement('h4');
  derrota.innerText=tabela[i].derrotas
  derrota.style.marginTop='-60px'
  derrota.style.marginLeft='53%'
  derrota.style.color='white'
  derrota.style.backgroundColor='brown'
  derrota.style.width = '30px'


  var golpro = document.createElement('h4');
  golpro.innerText=tabela[i].gols_pro
  golpro.style.marginTop='-60px'
  golpro.style.marginLeft='60%'
  golpro.style.color='white'
  golpro.style.backgroundColor='brown'
  golpro.style.width = '30px'


  var golcontra = document.createElement('h4');
  golcontra.innerText=tabela[i].gols_contra
  golcontra.style.marginTop='-60px'
  golcontra.style.marginLeft='67%'
  golcontra.style.color='white'
  golcontra.style.backgroundColor='brown'
  golcontra.style.width = '30px'


  var saldo = document.createElement('h4');
  saldo.innerText=tabela[i].saldo_gols
  saldo.style.marginTop='-60px'
  saldo.style.marginLeft='74%'
  saldo.style.color='white'
  saldo.style.backgroundColor='brown'
  saldo.style.width = '30px'

  var jogo = document.createElement('h4');
  jogo.innerText=tabela[i].jogos
  jogo.style.marginTop='-60px'
  jogo.style.marginLeft='81%'
  jogo.style.color='white'
  jogo.style.backgroundColor='brown'
  jogo.style.width = '30px'


  var jogopassado = document.createElement('h4');
  jogopassado.innerText=tabela[i].aproveitamento
  jogopassado.style.marginTop='-60px'
  jogopassado.style.marginLeft='87%'
  jogopassado.style.color='black'
  jogopassado.style.backgroundColor='#6c93c7'
  jogopassado.style.width = '101px'

 
    document.getElementById('partidasAoVivo2').append(logo,ano, posicao,nomelogo,ponto,vit,empate,derrota,golpro,golcontra,saldo,jogo,jogopassado);
 }
}

document.write(buscarPartidas2());

//parte de tabela

const urljogo = "https://api.api-futebol.com.br/v1/campeonatos/10/rodadas/1"



function buscarjogos(){
  fetch(urljogo, options)
  .then(resposta => {
    resposta.json()
    .then(obj => {
      matamatacopa(obj);
    })
  })
  .catch()
}

function matamatacopa(fase){
  console.log(fase, 'isso é fases da copa do brasil.')



  var rodada = document.createElement('h3')
  rodada.innerText=fase.partidas[0].placar
  rodada.style.color='white'


  var rodadacasa = document.createElement('img')
  rodadacasa.setAttribute('src', fase.partidas[0].time_mandante.escudo)
  rodadacasa.style.width='70px'

  var rodadafora = document.createElement('img')
  rodadafora.setAttribute('src', fase.partidas[0].time_visitante.escudo)
  rodadafora.style.width='70px'
  rodadafora.style.marginLeft='200px'
  rodadafora.style.marginTop='-100px'

  var jogo1 = document.createElement('h3')
  jogo1.innerText=fase.nome
  jogo1.style.color='red'


  var data = document.createElement('h3')
  data.innerText=fase.partidas[0].data_realizacao
  data.style.color='white'


  
  

  document.getElementById("partida0").append(jogo1,rodada,data,rodadacasa,rodadafora);
 


///////////////////////PARTIDA 1///////////////////////////

var rodada2 = document.createElement('h3')
rodada2.innerText=fase.partidas[1].placar

var rodadacasa2 = document.createElement('img')
rodadacasa2.setAttribute('src', fase.partidas[1].time_mandante.escudo)
rodadacasa2.style.width='70px'

var rodadafora2 = document.createElement('img')
rodadafora2.setAttribute('src', fase.partidas[1].time_visitante.escudo)
rodadafora2.style.width='70px'
rodadafora2.style.marginLeft='200px'
rodadafora2.style.marginTop='-100px'

var jogo2 = document.createElement('h3')
jogo2.innerText=fase.nome
jogo2.style.color='red'
jogo2.style.marginTop='20px'


var data2 = document.createElement('h3')
data2.innerText=fase.partidas[1].data_realizacao




document.getElementById("partida1").append(jogo2,rodada2,data2,rodadacasa2,rodadafora2);


///////////////////////////// PARTIDA 2 //////////////////////////

var rodada3 = document.createElement('h3')
rodada3.innerText=fase.partidas[2].placar

var rodadacasa3 = document.createElement('img')
rodadacasa3.setAttribute('src', fase.partidas[2].time_mandante.escudo)
rodadacasa3.style.width='70px'

var rodadafora3 = document.createElement('img')
rodadafora3.setAttribute('src', fase.partidas[2].time_visitante.escudo)
rodadafora3.style.width='70px'
rodadafora3.style.marginLeft='200px'
rodadafora3.style.marginTop='-100px'

var jogo3 = document.createElement('h3')
jogo3.innerText=fase.nome
jogo3.style.color='red'
jogo3.style.marginTop='20px'


var data3 = document.createElement('h3')
data3.innerText=fase.partidas[2].data_realizacao



document.getElementById("partida2").append(jogo3,rodada3,data3,rodadacasa3,rodadafora3);


//////////////////////////// PARTIDA 3 /////////////////////////

var rodada4 = document.createElement('h3')
rodada4.innerText=fase.partidas[3].placar

var rodadacasa4 = document.createElement('img')
rodadacasa4.setAttribute('src', fase.partidas[3].time_mandante.escudo)
rodadacasa4.style.width='70px'

var rodadafora4 = document.createElement('img')
rodadafora4.setAttribute('src', fase.partidas[3].time_visitante.escudo)
rodadafora4.style.width='70px'
rodadafora4.style.marginLeft='200px'
rodadafora4.style.marginTop='-100px'

var jogo4 = document.createElement('h3')
jogo4.innerText=fase.nome
jogo4.style.color='red'
jogo4.style.marginTop='20px'


var data4 = document.createElement('h3')
data4.innerText=fase.partidas[3].data_realizacao




document.getElementById("partida3").append(jogo4,rodada4,data4,rodadacasa4,rodadafora4);


///////////////////////////PARTIDA 4 //////////////////////////

var rodada5 = document.createElement('h3')
rodada5.innerText=fase.partidas[4].placar

var rodadacasa5 = document.createElement('img')
rodadacasa5.setAttribute('src', fase.partidas[4].time_mandante.escudo)
rodadacasa5.style.width='70px'

var rodadafora5 = document.createElement('img')
rodadafora5.setAttribute('src', fase.partidas[4].time_visitante.escudo)
rodadafora5.style.width='70px'
rodadafora5.style.marginLeft='200px'
rodadafora5.style.marginTop='-100px'

var jogo5 = document.createElement('h3')
jogo5.innerText=fase.nome
jogo5.style.color='red'
jogo5.style.marginTop='20px'


var data5 = document.createElement('h3')
data5.innerText=fase.partidas[4].data_realizacao



document.getElementById("partida4").append(jogo1,rodada,data,rodadacasa,rodadafora);


///////////////////////////////PARTIDA 5//////////////////////////

var rodada6 = document.createElement('h3')
rodada6.innerText=fase.partidas[5].placar

var rodadacasa6 = document.createElement('img')
rodadacasa6.setAttribute('src', fase.partidas[5].time_mandante.escudo)
rodadacasa6.style.width='70px'

var rodadafora6 = document.createElement('img')
rodadafora6.setAttribute('src', fase.partidas[5].time_visitante.escudo)
rodadafora6.style.width='70px'
rodadafora6.style.marginLeft='200px'
rodadafora6.style.marginTop='-100px'

var jogo6 = document.createElement('h3')
jogo6.innerText=fase.nome
jogo6.style.color='red'
jogo6.style.marginTop='20px'


var data6 = document.createElement('h3')
data6.innerText=fase.partidas[5].data_realizacao



document.getElementById("partida5").append(jogo6,rodada6,data6,rodadacasa6,rodadafora6);



/////////////////////////////////////////// parte 6 //////////////////

var rodada7 = document.createElement('h3')
rodada7.innerText=fase.partidas[6].placar

var rodadacasa7 = document.createElement('img')
rodadacasa7.setAttribute('src', fase.partidas[6].time_mandante.escudo)
rodadacasa7.style.width='70px'

var rodadafora7 = document.createElement('img')
rodadafora7.setAttribute('src', fase.partidas[6].time_visitante.escudo)
rodadafora7.style.width='70px'
rodadafora7.style.marginLeft='200px'
rodadafora7.style.marginTop='-100px'

var jogo7 = document.createElement('h3')
jogo7.innerText=fase.nome
jogo7.style.color='red'
jogo7.style.marginTop='20px'


var data7 = document.createElement('h3')
data7.innerText=fase.partidas[6].data_realizacao




document.getElementById("partida6").append(jogo7,rodada7,data7,rodadacasa7,rodadafora7);



/////////////////////////////////////////// parte 7 //////////////////

var rodada8 = document.createElement('h3')
rodada8.innerText=fase.partidas[7].placar

var rodadacasa8 = document.createElement('img')
rodadacasa8.setAttribute('src', fase.partidas[7].time_mandante.escudo)
rodadacasa8.style.width='70px'

var rodadafora8 = document.createElement('img')
rodadafora8.setAttribute('src', fase.partidas[7].time_visitante.escudo)
rodadafora8.style.width='70px'
rodadafora8.style.marginLeft='200px'
rodadafora8.style.marginTop='-100px'

var jogo8 = document.createElement('h3')
jogo8.innerText=fase.nome
jogo8.style.color='red'
jogo8.style.marginTop='20px'


var data8 = document.createElement('h3')
data8.innerText=fase.partidas[7].data_realizacao



document.getElementById("partida7").append(jogo8,rodada8,data8,rodadacasa8,rodadafora8);



/////////////////////////////////////////// parte 8 //////////////////

var rodada9 = document.createElement('h3')
rodada9.innerText=fase.partidas[8].placar

var rodadacasa9 = document.createElement('img')
rodadacasa9.setAttribute('src', fase.partidas[8].time_mandante.escudo)
rodadacasa9.style.width='70px'

var rodadafora9 = document.createElement('img')
rodadafora9.setAttribute('src', fase.partidas[8].time_visitante.escudo)
rodadafora9.style.width='70px'
rodadafora9.style.marginLeft='200px'
rodadafora9.style.marginTop='-100px'

var jogo9 = document.createElement('h3')
jogo9.innerText=fase.nome
jogo9.style.color='red'
jogo9.style.marginTop='20px'


var data9 = document.createElement('h3')
data9.innerText=fase.partidas[8].data_realizacao



document.getElementById("partida8").append(jogo9,rodada9,data9,rodadacasa9,rodadafora9);



/////////////////////////////////////////// parte 9 //////////////////

var rodada10 = document.createElement('h3')
rodada10.innerText=fase.partidas[9].placar

var rodadacasa10 = document.createElement('img')
rodadacasa10.setAttribute('src', fase.partidas[9].time_mandante.escudo)
rodadacasa10.style.width='70px'

var rodadafora10 = document.createElement('img')
rodadafora10.setAttribute('src', fase.partidas[9].time_visitante.escudo)
rodadafora10.style.width='70px'
rodadafora10.style.marginLeft='200px'
rodadafora10.style.marginTop='-100px'

var jogo10 = document.createElement('h3')
jogo10.innerText=fase.nome
jogo10.style.color='red'
jogo10.style.marginTop='20px'


var data10 = document.createElement('h3')
data10.innerText=fase.partidas[9].data_realizacao


document.getElementById("partida9").append(jogo10,rodada10,data10,rodadacasa10,rodadafora10);



}

document.write(buscarjogos());

