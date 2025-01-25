const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos"); /*para selecionar 2 e uma vez, segura o ctrl */
const relogio = setInterval(function time(){
    let dateToday = new Date(); /*pegar as datas e hrrs de hj */
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (hr < 10) hr = "0" + hr;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
})

