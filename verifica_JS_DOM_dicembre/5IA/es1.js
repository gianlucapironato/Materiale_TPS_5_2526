// per valutazione: 2 punti ogni funzione
// 0 se assente soluzione, 1 se parziale (es. contiene errori ma strategia è corretta), 2 se completa

function contaVocali(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U'){
            count++;
        }
    }
    return count;   
}
function maxVocali(str1,str2){
    let vocali1 = contaVocali(str1);
    let vocali2 = contaVocali(str2);
    if(vocali1 > vocali2){
        return true;
    }
    else{
        return false;
    }  
}
function arrMaxVocali(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(maxVocali(arr[i],max)){
            max = arr[i];
        }
    }
    return max;
}