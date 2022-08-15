let rs = require ("readline-sync");
let  = mes = parseInt (rs.question("Digite  o mes:"))
/*if  (mes === 1){
    console.log("Janeiro");
}else if(mes === 2){
    console.log("Fevereiro")
}else if(mes === 2){
    console.log("março")
}else if(mes === 3){
    console.log("abril")
}else if(mes === 4){
        console.log("Maio")
    }else if(mes === 5){
        console.log("Junho")
    }else if(mes === 6){
        console.log("julho")
    }else if(mes === 7){
            console.log("Agosto")
        }else if(mes === 8){
            console.log("Setembro")
        }else if(mes === 10){
            console.log("outubro")
        }else if(mes === 11){
            console.log("Novembro")
        }else if(mes === 12){
            console.log("Dezembro")
        }else {
            console.log("Esse mes é invalido!!")
    
    
}*/

switch(mes){
    case 1:
    console.log("janeiro")
    break;

    case 2:
    console.log("Fevereiro")
    break;

    case 3:
    console.log("Março")
    break;

    case 4:
    console.log("Abril")
    break;

    case 5:
    console.log("Maio")
    break;

    case 6:
    console.log("Junho")
    break;

    case 7:
    console.log("Julho")
    break;

    case 8:
    console.log("Agosto")
    break;

    case 9:
    console.log("Setembro")
    break;

    case 10:
    console.log("Outubro")
    break;

    case 11:
    console.log("Novembro")
    break;

    case 12:
    console.log("Dezembro")
    break;

    default:
        console.log("mes invalido")
        break;
}
