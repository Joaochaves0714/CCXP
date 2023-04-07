
const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const labels = {
    dias: 'D',
    horas: 'H',
    minutos: 'M',
    segundos: 'S'
  };

const lancamento = "14 apr 2023"

function countDown() {
   const dataLanc = new Date(lancamento)
   const hoje = new Date()

   const segTotal = (dataLanc - hoje) / 1000;

   const finalDias = Math.floor(segTotal / 60 / 60 / 24);
   const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
   const finalMinutos = Math.floor(segTotal / 60) % 60;
   const finalSegundos = Math.floor(segTotal) % 60;

   dia.innerHTML = `${finalDias} ${labels.dias}`;
   hora.innerHTML = `${formatoTempo(finalHoras)} ${labels.horas}`;
   minuto.innerHTML = `${formatoTempo(finalMinutos)} ${labels.minutos}`;
   segundo.innerHTML = `${formatoTempo(finalSegundos)} ${labels.segundos}`;
}

function formatoTempo(tempo) {
   return tempo < 10 ? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000)


function entrar(){
   garantaVaga.style.background = 'yellow'
   garantaVaga.style.color = 'black'
   garantaVaga.style.transition = "background 0.3s ease-in-out"
}

function sair(){
   garantaVaga.style.background = '#514988'
   garantaVaga.style.color = 'white'
   garantaVaga.style.transition = "background 0.3s ease-in-out"
}
