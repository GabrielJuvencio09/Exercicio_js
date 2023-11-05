const check = document.querySelector('.check')
const basico = document.querySelector('.valor-b')
const profissional = document.querySelector('.valor-p')
const master = document.querySelector('.valor-m')
const descontos = document.querySelectorAll('.desconto')
const sessoes = document.querySelectorAll('section')


function Foichecado(){
     
    sessoes.forEach((e) => {
        if (!check.checked) {
            e.classList.remove('flip-in-ver-left')
            e.classList.add('flip-in-ver-right');
        } else {
            e.classList.add('flip-in-ver-left')
            e.classList.remove('flip-in-ver-right');
        }
    })

    descontos.forEach(function(desconto){
        desconto.classList.toggle('ativo')
        
    })

    if(check.checked) {
        basico.innerHTML  = '$239,88'
        profissional.innerHTML = '$299,88'
        master.innerHTML = '$479,88'
    } else {
        basico.textContent = '$19.99'
        profissional.textContent = '$24.99'
        master.textContent = '$39.99'
    }
}

check.addEventListener('click', Foichecado)
// ------------------------- //



sessoes.forEach((sessao) => {

   

    sessao.addEventListener('mouseover', alterarestilo)
    sessao.addEventListener('mouseout', removerestilo);
    function alterarestilo() {
        sessao.classList.add('estilo');
    }

    function removerestilo() {
        sessao.classList.remove('estilo');
    }



})