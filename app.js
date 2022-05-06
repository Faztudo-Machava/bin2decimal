const txtBin = document.getElementById('txtBin');
const btnConverter = document.getElementById('btnConverter');
const resultado = document.getElementById('resultado');
let ready = true;
let decimal = 0;

btnConverter.addEventListener('click', (event) => {
    event.preventDefault();
    converter();
});

function verificarBinario() {
    let binValue = txtBin.value;
    for (let i = 0; i < binValue.length; i++) {
        let digit = binValue.charAt(i);
        if ((digit != 0) && (digit != 1)) {
            ready = false;
        }
    }
}

function converter() {
    verificarBinario();
    if (ready) {
        let binValue = txtBin.value;
        let exp = 0;
        for (let i = binValue.length - 1; i >= 0; i--) {
            let digit = binValue.charAt(i);
            let number = parseInt(digit);
            decimal = decimal + number * Math.pow(2, exp);
            exp += 1;
        }
        resultado.style.color = 'white';
        resultado.innerText = binValue + ' na forma decimal fica ' + decimal;
    } else {
        resultado.style.color = 'red';
        resultado.innerText = 'O numero inserido nao e binario, insira outro e tente novamente';
    }
    decimal = 0;
    ready = true;
}