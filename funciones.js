function suma(){
    let number1= Number (document.getElementById('number1').value);
    let number2= Number(document.getElementById('number2').value);
    let final=number1 + number2;

    return document.getElementById('final').value=final;
}
function resta(){
    let number1= Number (document.getElementById('number1').value);
    let number2= Number(document.getElementById('number2').value);
    let final=number1 - number2;

    return document.getElementById('final').value=final;
}

const div = () => {
    let number1 = Number(document.getElementById('number1').value);
    let number2 = Number(document.getElementById('number2').value);

    if (number2 === 0) {
        document.getElementById('result').innerHTML = "No se puede dividir entre 0";
    } else {
        let result = number1 / number2;
        document.getElementById('result').innerHTML = result;
    }
}
const multi=()=>{
    let  number1=Number(document.getElementById('number1').value);
    let number2= Number (document.getElementById('number2').value);
    let result=number1*number2;

    return document.getElementById('result').innerHTML= result;
}

const residuo = () => {
    let number1 = Number(document.getElementById('number1').value);
    let number2 = Number(document.getElementById('number2').value);

    let result = (number1 * number2) / 100;
    

    document.getElementById('result').innerHTML = result;
}