// per valutazione: 2 punti ogni funzione
// 0 se assente soluzione, 1 se parziale (es. contiene errori ma strategia è corretta), 2 se completa

function clean(s,x){
    let new_s = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== x) {
            new_s += s[i];
        }
    }
    return new_s;
}
function cleanArr(arr,x){

    //copio l'array
    let arrCopy = arr.slice(); //oppure con ciclo for

    for (let i = 0; i < arr.length; i++) {
        arrCopy.push(clean(arr[i], x));
    }

    return arrCopy;
}
function isCleanArr(arr,x){
    let isClean = true;
    let j=0;
    while(isClean && j<arr.length){
        if (arr[j] != clean(arr[j], x)) {
            isClean = false;
        }
        j++;
    }
    return isClean;
}